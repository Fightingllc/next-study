it('按钮和链接是否可点击', async () => {
  await page.goto('http://localhost:3000/notes/demos', { waitUntil: 'load' });
  
  // 等待按钮元素加载完成
  const button = await page.waitForSelector('#disabledBtn', { visible: true });
  await button.click();
});
