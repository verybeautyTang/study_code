function test  () {
  let a = 20;
  let b = 110;
  a = a ^ b;
  console.log(a);
  b = a ^ b;
  console.log(b);
  a = a ^ b;
  console.log(a);
}
test();

/** 现在假设有一个数组,数组里面存在很多0-9的数字,现在数组中只有一个数字出现了奇数次,请找到这个数字 */
/** 思路: 因为只有一个出现了奇数次,所以其他的异或起来都是0, 用异或的办法最后只会返回为奇数次的那个数字 */
function hasOneData (arr) {
  /** 0异或任何数字都是返回当前数字 */
  let eor = 0
  arr.forEach((r) => {
    eor ^= r
  });
  return eor;
}
/** 现在假设有一个数组,数组里面存在很多0-9的数字,现在数组中只有两个数字出现了奇数次,请找到这两个数字 */
function hasTwoData (arr) {
  /** 先定义一个为0的常数 */
  let eor = 0
  let eorTwo = 0
  arr.forEach((r) => {
    eor ^= r
  });
  console.log(eor)
  /** 在这个时候,已经得到了一个异或数据 eor = a ^ b */
  /**  eorTwo: 用于提取最右边的一个1, 一般都是这么操作eor & (~eor + 1) */
  let rightOne = eor & (~eor + 1)
  arr.forEach((i) => {
    if((i & rightOne ) === 0) { // 判断数据中是否存在为1的,如果存在,那么就证明一定是a或者是b
      eorTwo ^= i
    }
  });
  eor = eor^eorTwo // 剩下的那个用异或就可以知道了 : a^ b ^ a  = b
  return {eor, eorTwo}
}

console.log(hasOneData([1,2,3,4,5,1,2,3,4,5,9]))
console.log(hasTwoData([1,2,3,4,5,6,7,1,2,3,4,5,6,7,8,9]))