import { Board } from "@/components/Board";
import DisableButton from "@/components/DisableButton";
import React from "react";

export default function page() {
  const tags = [
    { name: "tag1", color: "red" },
    { name: "tag2", color: "blue" },
    { name: "tag3", color: "green" },
    { name: "tag4", color: "pink" },
    { name: "tag5", color: "purple" },
    { name: "tag6", color: "orange" },
    { name: "tag7", color: "teal" },
  ];
  return (
    <div>
      <h1>This is the demo page</h1>
      <div className="flex justify-center ">
        <div className="border-solid border-2 border-indigo-600 p-2 rounded-md ml-1">
          <Board />
        </div>
        <div className="border-solid border-2 border-pink-400 p-2 rounded-md ml-2">
          <h3>动态显示禁用按钮</h3>
          <DisableButton />
        </div>
        <div>
        {tags.map((item, index) => {
          return (
            <span
              key={index}
              className={"inline-block px-2 py-1 rounded-md m-2 text-white"}
              style={{ backgroundColor: `${item.color}` }} // 使用具体颜色值
            >
              {item.name}
            </span>
          );
        })}
      </div>
      </div>
      
    </div>
  );
}
