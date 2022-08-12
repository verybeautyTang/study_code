/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    // 直接用&表示
    // return n & 3

    // 求余数的方式【如果他%4是空的话，就证明他怎么都会输】
    if(n % 4 === 0) return false
    return true
};
