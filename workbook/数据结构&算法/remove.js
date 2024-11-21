// 移除指定元素
function remove(array, index) {
  if(index < 0 || index > array.length) {
    throw new Error("Index out of bounds")
  }
  // 前移
  for(let i = index; i < array.length - 1; i++ ) {
    array[i] = array[i+1];
  }
  // 显示调整数组长度
  array.length -= 1;
  return array;
}
const arr1 = [1, 2, 3, 4];
remove(arr1, 3); // [ 1, 2, 3 ]