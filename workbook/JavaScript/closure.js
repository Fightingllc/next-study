// 闭包
var a = 1;
function A() {
     let b = 2;
     function B () {
        console.log(a); //这里访问全局变量a不属于闭包
        console.log(b); //这里访问函数内部变量b属于闭包
    }
    B()
}

A() 

// 闭包函数
function C(size) {
    return function () {
        return size + "px";
    }
}

C(2)