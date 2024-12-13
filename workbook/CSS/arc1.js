/* 定义一个自定义背景绘制类 */
class BackgroundCanvas {
    /* 指定支持的 CSS 自定义属性 */
    static get inputProperties() {
      return ['--gradientOffset']; // 定义渐变偏移属性
    }
  
    /* 主绘制逻辑 */
    paint(ctx, geom, properties) {
      const radius = 200; // 圆的半径
      const centerX = geom.width / 2; // 圆心的X坐标
      const centerY = geom.height / 2; // 圆心的Y坐标
  
      // 获取当前渐变偏移量
      const offset = parseFloat(properties.get('--gradientOffset').toString());
  
      // 创建动态渐变
      const gradient = ctx.createLinearGradient(0, 0, geom.width, geom.height);
      gradient.addColorStop((0 + offset) % 1, "#FF0111"); // 红色
      gradient.addColorStop((0.5 + offset) % 1, "#00FF00"); // 绿色
      gradient.addColorStop((1 + offset) % 1, "#0000FF"); // 蓝色
  
      ctx.strokeStyle = gradient; // 设置渐变为描边样式
      ctx.lineWidth = 10; // 设置描边宽度
      ctx.beginPath(); // 开始路径
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI); // 绘制圆形
      ctx.stroke(); // 描边
      ctx.closePath(); // 结束路径
    }
  }
  
  /* 注册 Paint Worklet */
  registerPaint('background-canvas', BackgroundCanvas);
  