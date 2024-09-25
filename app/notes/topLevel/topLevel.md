## 顶级问题


### 😁next.config.js
    进行项目配置    
🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓


        const nextConfig = {
            webpack:(config) => {
                config.module.rules.push({
                    test: /\.md$/,
                    use: 'raw-loader',
                });
                return config;
            }
        };

        export default nextConfig;


### tailwind.config.js

    对tailwindcss需要的样式类进行配置
    $$