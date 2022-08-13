/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    if(n ===0 ) return [0]
    let total = []
    let i = 0;
    while(i <= n) {
        // 转化成二进制
        // 二进制为1的数字相加
        let data = i.toString(2).split('').reduce((a,b) =>  +a + +b)
        // 存入数组
        total.push(data)
        i++;
    }
    return total
};
