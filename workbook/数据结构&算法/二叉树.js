// Question：有一个增序的有序数组，输入一个target，返回它在数组中的索引值
const arr = [1,3,4,5,6,7];

// 查target的索引
function binarySearch(nums,target) {
  // 初始化双闭区间[0, n - 1],即i,j分别指向数组首元素、尾元素
  let i = 0,
      j = nums.length - 1;
  
  // 循环，当搜索区间为空时跳出（当i > j 时为空）
  while(i <= j){
    // 计算中间索引 m，使用 parseInt() 向下取整
    const m = parseInt((i + j)/2);
    // const m = parseInt(i + (j - 1) / 2);
    if(nums[m] < target) {
      //此情况说明 target 在区间[m + 1, j]中
      i = m + 1;
    } else if(nums[m] > target) {
      // 说明 target 在区间 [i, m - 1] 中
      j = m - 1; 
    } else {
      // 找到目标元素，返回其索引
      return m;
    }
    
  }
  // 未找到目标元素，返回 -1
  return -1;
}

binarySearch(arr,3);