"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

// 创建一个初始化指定长度和初始值的数组
const initializeArrayWithValues = (length: number, value: unknown) => 
    Array(length).fill(value);

// 棋盘组件
 export const Board: React.FC = () => {
    const boardSize = 15; // 棋盘大小
    const [board, setBoard] = useState<(string | null)[][]>(
        Array.from({ length: boardSize }, () => Array(boardSize).fill(null))
    );
    const [currentPlayer, setCurrentPlayer] = useState<'A' | 'B'>('A');
    const [winner, setWinner] = useState<'A' | 'B' | null>(null);
    const playerColors: { [key: string]: string } = {
        A: 'blue',
        B: 'red'
    };

    // 检查胜利的函数
    const checkWinner = (row: number, col: number): boolean => {
        const directions = [
            { x: 1, y: 0 },  // 水平
            { x: 0, y: 1 },  // 垂直
            { x: 1, y: 1 },  // 斜向右下
            { x: 1, y: -1 }  // 斜向右上
        ];

        for (const { x, y } of directions) {
            let count = 1;

            // 向一个方向检查
            count += countInDirection(row, col, x, y);
            // 向相反方向检查
            count += countInDirection(row, col, -x, -y);

            if (count >= 5) {
                return true; // 找到胜利者
            }
        }
        return false;
    };

    // 统计指定方向上连续相同棋子的数量
    const countInDirection = (row: number, col: number, x: number, y: number): number => {
        let count = 0;
        for (let step = 1; step < 5; step++) {
            const newRow = row + step * x;
            const newCol = col + step * y;
            if (isValidMove(newRow, newCol) && board[newRow][newCol] === currentPlayer) {
                count++;
            } else {
                break;
            }
        }
        return count;
    };

    // 检查移动是否合法
    const isValidMove = (row: number, col: number): boolean => {
        return row >= 0 && row < boardSize && col >= 0 && col < boardSize;
    };

    // 处理点击事件
    const handleClick = (row: number, col: number) => {
        if (board[row][col] || winner) return; // 已经有棋子或者已有胜者

        const newBoard = board.map((r) => r.slice()); // 复制棋盘
        newBoard[row][col] = currentPlayer; // 设置当前玩家的棋子

        if (checkWinner(row, col)) {
            setWinner(currentPlayer); // 设定胜者
            setTimeout(() => alert(`玩家 ${currentPlayer} 胜出！`), 100); // 弹窗提示
        }

        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === 'A' ? 'B' : 'A'); // 切换玩家
    };

    // 重置游戏
    const resetGame = () => {
        setBoard(initializeArrayWithValues(boardSize, Array(boardSize).fill(null)));
        setCurrentPlayer('A');
        setWinner(null);
    };

    return (
        <div>
            <h1>五子棋游戏</h1>
            <h2>当前玩家: {currentPlayer}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${boardSize}, 40px)` }}>
                {board.map((row, rowIndex) => 
                    row.map((cell, colIndex) => (
                        <div 
                            key={`${rowIndex}-${colIndex}`} 
                            onClick={() => handleClick(rowIndex, colIndex)} 
                            style={{
                                width: '40px', 
                                height: '40px', 
                                backgroundColor: cell ? playerColors[cell] : 'white', 
                                border: '1px solid black', 
                                cursor: 'pointer'
                            }}
                        />
                    ))
                )}
            </div>
            {winner && <div className='flex justify-end mt-8'><Button variant='outline' onClick={resetGame}>重新开始</Button></div>}
        </div>
    );
};


