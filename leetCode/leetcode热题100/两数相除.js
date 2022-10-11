/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
     // 只有一种情况会导致结果溢出
        if (dividend == -2147483648 && divisor == -1) {
            return 2147483647;
        }
        return parseInt(dividend / divisor)
};
