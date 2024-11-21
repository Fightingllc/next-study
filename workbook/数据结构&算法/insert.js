// 插入值到指定索引
function insertInPlace(array, index, value) {
  // 判断索引是否合法
  if(index < 0 || index > array.length) {
    throw new Error("Index out of bounds ")
  }
  // Js数组虽然是动态的，但在直接操作数组时，必须显式地调整其 length 属性
  array.length += 1;
  for(let i = array.length -1 ; i > index; i-- ){
    array[i] = array[i - 1];
  }
  array[index] = value;

  return array;
}
const arr = [1, 2, 3, 4];
insertInPlace(arr, 2, 6); // [ 1, 2, 6, 3, 4 ]



