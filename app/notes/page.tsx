/*
 * @Description:
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2024-09-11 21:05:17
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2024-09-11 23:31:54
 */
import React, { Children } from "react";
import Markdown from "markdown-to-jsx";
import fs from "fs";
import path from "path";
import CodeBlock from "@/components/CodeBlock";

const NotesPage: React.FC = () => {
  const filePath = path.join(process.cwd(), "app/notes/notes.md");
  const fileContent = fs.readFileSync(filePath, "utf8");

  return (
    <div className="container prose prose-indigo prose-lg mx-auto bg-gray-100">
      <Markdown
        options={{
          overrides: {
            code: {
              component: CodeBlock,
              props: {
                className: "bg-red-800 text-white p-4 rounded", // 自定义代码块的样式
              },
            },
          },
        }}
      >
        {fileContent}
      </Markdown>
    </div>
  );
};

export default NotesPage;
