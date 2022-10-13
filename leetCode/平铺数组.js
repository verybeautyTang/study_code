// 平铺数组
let newArray = [];
function getArray(arr) {
  if (arr.length === 0) return arr;
  for(let i = 0; i< arr.length; i++) {
    if(typeof(arr[i]) === 'object') {
      getArray(arr[i])
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
