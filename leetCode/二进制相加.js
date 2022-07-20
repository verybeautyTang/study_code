/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

 // 首先转化为10进制
 function twoToTen (data) {
     const reverseData = data.split('').reverse().join('')
     let result = 0
     for(let i = 0; i< reverseData.length; i++) {
         if(+reverseData[i] !== 0) {
             result += Math.pow(2, i) 
         }
     }
     return result;
 }
var addBinary = function(a, b) {
    let tempResult = twoToTen(a) + twoToTen(b);
    if(tempResult === 0 ) return '0';
    let result = ''
    while(tempResult > 0) {
        result += tempResult % 2;
        tempResult = parseInt(tempResult / 2);
    }
    return result.split('').reverse().join('')
};
