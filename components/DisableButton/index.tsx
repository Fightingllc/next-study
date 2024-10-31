"use client"
import React, { useState } from 'react';
import { Button } from '../ui/button';

const DisableButton: React.FC = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [remainingTime, setRemainingTime] = useState(60); // 剩余时间

    const handleClick = () => {
        setIsDisabled(true); // 禁用按钮
        setRemainingTime(60); // 重置剩余时间

        const timer = setInterval(() => {
            setRemainingTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer); // 清除定时器
                    setIsDisabled(false); // 60秒后恢复按钮状态
                    return 0; // 剩余时间归零
                }
                return prevTime - 1; // 递减剩余时间
            });
        }, 1000); // 每秒更新
    };

    return (
        <div>
            <Button variant="outline" className='bg-pink-500 text-white' onClick={handleClick} disabled={isDisabled}>
                {isDisabled ? `剩余时间: ${remainingTime}秒` : '点击禁用'}
            </Button>
        </div>
    );
};

export default DisableButton;
