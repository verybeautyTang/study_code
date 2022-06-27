 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reserveString = String(x).split("").reverse().join("")
    if(String(x) === reserveString) return true
    return false
};

// 进阶： 你能不将整数转为字符串来解决这个问题吗？ 
