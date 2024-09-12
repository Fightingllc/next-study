# My Notes

## markdown 转 jsx

在开发过程中学习到的新知识和笔记通过markdown的格式记录下来，然后转化为jsx的格式渲染到页面中。

- 🍉markdown-to-jsx
  最轻量级、可定制的 React markdown 组件。

- 🍓raw-loader
  一个 webpack 的 loader，允许将文件导入为 String（将 md 文件转为 sting）。
  需要在 next.config.js 中对'raw-loader'进行配置

  ```js
  const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader",
      });
      return config;
    },
  };
  ```

- 🍎@tailwindcss/typography
  tailwindcss 类样式的使用。
  Tailwind CSS 提供了 prose 类，专门用于处理 Markdown 或富文本内容的样式，可以直接在 Markdown 容器上应用 prose 类。

  ```javascript
  <div className="prose prose-lg mx-auto">
    <Markdown>{fileContent}</Markdown>
  </div>
  ```

  另外需要在 tailwind.config.ts 中进行配置

  ```javascript
  plugins: [
   require('@tailwindcss/typography'), // 配置prose类
  ],
  ```

## Error message

### "use client"

× You're importing a component that needs useState. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.
│ Learn more: https://nextjs.org/docs/getting-started/react-essentials

- resolve

要使用像 useState 这样的钩子，你需要确保你的组件在客户端渲染。您可以通过在组件文件的顶部添加 “use client” 指令来实现此目的。

This is a sample note written in markdown.

- Item 1
- Item 2

**Bold text**
