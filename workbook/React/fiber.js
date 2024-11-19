/* eslint-disable @typescript-eslint/no-unused-vars */
// 模拟浏览器的requestAnimationFrame
// requestAnimationFrame回调的执行与浏览器的帧同步机制无关，它是在浏览器内核中执行的，任务执行后执行。时机其实也并不是很准确
// requestAnimationFrame 还有个特点，就是当页面处理未激活的状态下，requestAnimationFrame 会停止执行：当页面后面再转为激活时，requestAnimationFrame 又会接着上面的任务继续执行。
let tasks = []; // 任务队列
let isPerformingTask = false; // 是否正在执行任务

// 1000/60 = 16.67ms

const channel = new MessageChannel(); // 创建一个消息通道
const port = channel.port2; // 获取通道的第二个端口

function scheduleTask(task, expirationTime) {
  tasks.push({ task, expirationTime }); // 将任务和过期时间添加到任务队列中
  if (!isPerformingTask) {
    isPerformingTask = true; // 将标识设置为true，表示有任务正在执行
    port.postMessage(null); // 向通道的第二个端口发送空消息
  }
}

function performTask(currentTime) {
  console.log("currentTime", currentTime);
  const frameTime = currentTime + 1000 / 60; // 每帧的时间间隔

  while (tasks.length > 0 && performance.now() - currentTime < frameTime) {
    const { task, expirationTime } = tasks.shift(); // 从任务队列中取出第一个任务
    if (performance.now() >= expirationTime) {
      // 如果任务没有过期，则执行任务
      task();
    } else {
      // 将任务重新插入队列，并等待一段时间后再次执行
      tasks.push({ task, expirationTime });
    }
  }

  if (tasks.length) {
    requestAnimationFrame(performTask);
  } else {
    isPerformingTask = false; // 表示当前没有任务正在执行
  }
}

// 当通道的第一个端口接收到消息时，开始执行任务
channel.port1.onmessage = () => requestAnimationFrame(performTask);

// 具体的调用
function myTask1() {
  console.log("Perfoming task 1");
}

function myTask2() {
  console.log("Perfoming task 2");
}
function myTask3() {
  console.log("Perfoming task 3");
}

// 通过添加超时任务到任务队列，并设置过期时间
scheduleTask(myTask1, performance.now() + 1000); // 过期时间为当前时间 + 1000ms
scheduleTask(myTask2, performance.now()); // 过期时间为当前时间
scheduleTask(myTask3, performance.now() + 3000); // // 过期时间为当前时间 + 3000ms

console.log("测试同步任务")

// 测试同步任务
// Perfoming task 2
// Perfoming task 1
// Perfoming task 3