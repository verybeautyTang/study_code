/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let n =0;
    let flag = x > 0;
    x = Math.abs(x)
    while(x) {
        n = n * 10 + x % 10;
        if(n > Math.pow(2, 31) - 1 || n < Math.pow(-2, 31)) return 0;
        x = Math.floor(x / 10);
    }
    return flag  ? n : -n;
};
