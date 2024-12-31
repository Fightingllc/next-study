it('首页加载时间应小于 3 秒', async () => {
    const startTime = Date.now();
    await page.goto('http://localhost:3000');
    const endTime = Date.now();
    const loadTime = endTime - startTime;
  
    expect(loadTime).toBeLessThan(3000); // 验证加载时间小于 3 秒
  });
  