const puppeteer = require('puppeteer');

(async () => {
    // 1. 启动浏览器
    const browser = await puppeteer.launch({
        headless: false, // 设置为 false 会打开可视化浏览器
        slowMo: 50,      // 减慢操作速度，方便观察
    });

    // 2. 打开一个新的页面
    const page = await browser.newPage();

    // 3. 设置页面视窗大小
    await page.setViewport({ width: 1280, height: 800 });

    // 4. 访问百度官网
    await page.goto('https://www.baidu.com');

    // 5. 输入搜索关键字
    await page.type('#kw', 'Puppeteer 自动化测试', { delay: 100 }); // 模拟用户输入
    console.log('已输入搜索关键字');

    // 6. 点击“百度一下”按钮
    await page.click('#su'); // 百度搜索按钮的 ID 是 'su'
    console.log('已点击搜索按钮');

    // 7. 等待搜索结果加载完成
    await page.waitForSelector('#content_left'); // 确保搜索结果区域存在
    console.log('搜索结果已加载完成');

    // 8. 截图保存搜索结果页面
    await page.screenshot({ path: 'baidu-search-result.png' });
    console.log('已保存搜索结果截图');

    // 9. 获取搜索结果的第一个链接标题
    const firstResult = await page.$eval('#content_left .c-container h3', el => el.textContent);
    console.log('第一个搜索结果标题：', firstResult);

    // 10. 关闭浏览器
    await browser.close();
})();
