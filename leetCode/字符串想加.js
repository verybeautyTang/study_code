/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  // 从末尾开始相加
    let i = num1.length -1;
    let j = num2.length -1;
  // 当前位数的个数
    let count = 0;
    const data = []
    while(i >= 0 || j >= 0 || count != 0) {
      // 返回当前位数的字符串
      // charAt: 返回当前的位置的字符串
        let n1 =  i >=0 ? num1.charAt(i) - '0' : 0 ;
        let n2 =  j >=0 ? num2.charAt(j) - '0' : 0 ;
      // 相加位数
        let temp = n1 + n2 + count;
      // 得到下一个位数的个数
        count = Math.floor(temp /10); 
      // 输入当前位数的个数
        data.push(temp % 10);
        i--;
        j--;
    }
  // 数组倒叙
    return data.reverse().join('')
};
