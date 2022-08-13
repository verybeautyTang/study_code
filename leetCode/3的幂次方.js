/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n === 0)return false
    while(n > 2) {
        if(n % 3 !==0 ) {
            return false;
        }
        n = Math.floor(n / 3)
    }
    return n == 1? true: false
};
