/* eslint-disable @typescript-eslint/no-unused-vars */
// 初始化数组的多种方法

/**
 * 🍉构造函数constructor
 * 缺陷：存在空值
 */
const arr = new Array(3);
console.log(arr); //[ <3 empty items> ]
arr.map(() => 1);

/**
 * 🍉Array.from()
 * 可以传递映射函数作为参数来填充数组而不是空槽
 * 缺陷：创建数组时会调用映射函数，可能会引入额外的开销
 */
const arr1 = Array.from({ length: 3 });
arr1.map(() => 1); //[ 1, 1, 1 ]
arr1.map((_, i) => i); //[ 0, 1, 2 ]
// ⭐ map遍历会返回一个新数组且不会影响原数组
const staticArr = Array.from({ length: 3 }, () => 1);
const indexArr = Array.from({ length: 3 }, (_, i) => i);
console.log("indexArr", indexArr); //[ 0, 1, 2 ]

/**
 * Array.fill()
 * 可以快速填充相同的值
 * 优点：在大量数据填充的情况下，比使用map更节省内存和时间
 */
const arr2 = Array(3).fill(1);
console.log(arr2); //[ 1, 1, 1 ]


/**
 * 🍉map() + Array.fill()
 * 创建一个指定长度的数组，并用相同的值填充每个元素
 * length: 创建数组的长度
 * value: 要填充的值
 * 使用场景：初始化常量数组：当你需要一个特定长度的数组，并且希望所有元素都初始化为相同的值时，例如
 * 1.创建一个用于存储默认设置的数组。
 * 2.创建一个棋盘或网格游戏的初始状态（比如全部填充为零或空值）。
 * 3.初始化一个用于存储用户输入的数组。
 */
const initializeArrayWithValues = (length, value) => 
    Array(length).fill(value);

/**
 * 🍉map() + Array.fill()
 * 创建一个指定长度的数组，并通过映射函数 (mapFn) 初始化每个元素的值。
 * n: 创建数组的长度
 * mapFn: 用于生成每个元素值的映射函数，默认情况下，它将每个元素初始化为其索引值。
 * 使用场景：生成有特定逻辑的数组：当你希望根据某种逻辑或规则初始化数组的元素时，initializeMappedArray 是个好选择。例如：
 * 1.生成一个随机数的数组。
 * 2.生成一个包含递增数字的数组。
 * 3.创建一个包含从 0 到 n-1 的数字的数组。
 * 4.生成一系列计算结果（如平方、倍数等）。
 * 注意：mapFn 函数的返回值将作为数组元素的值。
 */
const initializeMappedArray = (n,mapFn = (_, i) => i) => 
    Array(n).fill(null).map(mapFn);
