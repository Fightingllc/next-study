"use client";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const VideoPlayer = ({ bovid }) => {
  const [isMuted, setIsMuted] = useState(true); // 默认静音

  // 切换静音状态
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className=" col-span-1 border-2 border-blue-500  relative rounded-lg h-[200px]">
      <iframe
        src={`https://player.bilibili.com/player.html?bvid=${bovid}&high_quality=1&autoplay=1&muted=${
          isMuted ? 1 : 0
        }`}
        scrolling="no"
        frameBorder="no"
        allow="autoplay; fullscreen"
        className="w-full h-full rounded-lg"
      ></iframe>
      {/* 静音切换按钮 */}
      {/* <button
        onClick={toggleMute}
        className="absolute bottom-2 left-2 p-2 bg-blue-500 text-white"
      >
        {isMuted ? '取消静音' : '静音'}
      </button> */}
    </div>
  );
}; 

const VideoGallery = () => {
  // Bilibili视频的bvid列表
  const videos = [
    "BV1hKyZYcEPf", // 替换为你自己的 bvid
    "BV1cQ2RYSE9p",
    "BV1Zf4y1n7Kn",
    "BV1uAyWYNEJR",
    "BV1qACUY7EL3",
    "BV1y52iYAEye",
    "BV1xBCRYmEyh",
    "BV17a1RYzExv",
    "BV1gixFezEqH",
  ];

  return (
    <div className="grid grid-cols-3 gap-6 p-2 ">
      {videos.map((bovid, index) => (
        <Card key={index} className="border-2 border-blue-500">
          <VideoPlayer  bovid={bovid} />
        </Card>
      ))}
    </div>
  );
};

export default VideoGallery;
