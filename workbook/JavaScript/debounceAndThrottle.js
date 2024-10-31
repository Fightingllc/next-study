/* eslint-disable @typescript-eslint/no-unused-vars */
// 防抖
function debounce(fn,wait) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        // settimeout用来延迟函数的执行，一旦函数被调用，就会清除之前的timer，重新设置timer
        timer = setTimeout(() => {
            // apply call的目的就是为了保证函数fn的上下文this正确，若是在箭头函数中会继承上下文，可以不使用
            // fn.apply(this,args)
            fn(...args)
        }, wait);
    }
}

// 节流
function throttle(fn,wait) {
    let timer;
    return (...args) => {
        if(timer) return; // 如果在等待就不执行
        // settimeout用来限制函数的执行频率，只有当timer为null的时候，才执行函数
        timer = setTimeout(() => {
            fn(...args)
            timer = null;//清除定时器
        }, wait);
    }
}