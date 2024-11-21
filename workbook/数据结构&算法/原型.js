
/**
 * new操作符
 * 1.创建一个新对象
 * 2.设置原型，将新对象的隐式原型__proto__指向构造函数的 prototype 属性
 * 3.将this指向新对象
 * 4.执行构造函数的代码（为这个新对象添加属性）
 * 5.如果该函数没有返回对象，则返回新对象
 */

function Person(name) {
    this.name = name;
}

const dog = new Person('dog');
console.log(dog.name) // dog
console.log("dog",dog); //dog Person { name: 'dog' }


console.log("原型指向",dog.__proto__ === Person.prototype); // true
console.log(dog instanceof Person); // true
console.log("Person",Person) //Person [Function: Person]
console.log("构造函数指向",Person.prototype.constructor === Person);
console.log(Person.prototype);
console.log(Object.getPrototypeOf(Person));
// 原型链的顶端就是null
console.log(Object.getPrototypeOf(Object.getPrototypeOf(dog))); //null

