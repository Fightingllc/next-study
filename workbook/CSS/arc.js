/* 定义一个自定义背景绘制类 */
class BackgroundCanvas {
    /* 指定哪些 CSS 属性会影响绘制结果 */
    static get inputProperties() {
      return [];
    }
  
    /* 主绘制逻辑 */
    paint(ctx, geom, properties) {
      const radius = 200; // 圆的半径
      const centerX = geom.width / 2; // 圆心的X坐标
      const centerY = geom.height / 2; // 圆心的Y坐标
  
      // 创建渐变颜色
      const gradient = ctx.createLinearGradient(0, 0, geom.width, geom.height);
      gradient.addColorStop(0, "#FF0000"); // 红色
      gradient.addColorStop(0.5, "#00FF00"); // 绿色
      gradient.addColorStop(1, "#0000FF"); // 蓝色
  
      ctx.strokeStyle = gradient; // 将渐变应用为边框颜色
      ctx.lineWidth = 10; // 设置边框的宽度
      ctx.beginPath(); // 开始路径
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI); // 绘制圆形路径
      ctx.stroke(); // 描边
      ctx.closePath(); // 结束路径
    }
  }
  
  /* 注册自定义 Paint Worklet */
  registerPaint("background-canvas", BackgroundCanvas);
  