'use client'
import { useRef } from "react";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


export default function Page() {
    const container = useRef();
    const circle = useRef();

    useGSAP(() => {
        // use selectors...
        // gsap.to(".box", { rotation: "+=360", duration: 3 });
        // 或使用引用...
        gsap.to(".green", {rotation: 360, x: 600, duration: 1});
        gsap.from(".purple", {rotation: -360, x: 100, duration: 1});
        gsap.fromTo(".blue", {x: -100},{rotation: 360, x: 700, duration: 1});
    },
        []
    ); // <-- 选择器文本的作用域（可选）
    return (
        <>
            <div className="container">
                <div className="font-bold text-2xl">gsap</div>
                <div className="box gradient-green bg-green-500 w-20 h-20 rounded green"></div>
                <div className="box gradient-purple bg-purple-500 w-20 h-20 rounded  purple"></div>
                <div className="box gradient-blue bg-blue-500 w-20 h-20 rounded  blue"></div>
            </div>
        </>
    )
}