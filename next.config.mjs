
/*
 * @Description: 
 * @Version: 2.0
 * @Autor: Morning
 * @Date: 2024-09-11 21:05:17
 * @LastEditors: Morning
 * @Motto: 要有梦想，即使遥远
 * @LastEditTime: 2024-09-11 22:42:06
 */
/** @type {import('next').NextConfig} */
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
