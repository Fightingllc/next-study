const obj = {};

Object.defineProperty(obj, 'name', {
  value: 'why',
  writable: true,
  enumerable: false,
  configurable: true
})

console.log(obj.name);
obj.age = 18;
console.log(obj.age);