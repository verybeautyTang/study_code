/**
 * @param {number} n
 * @return {boolean}
 */
const getN = (n) => {
    let data = 0;
    while(n !== 0) {
        data += Math.pow(n%10, 2)
        n = Math.floor(n / 10)
    }
    return data
}
var isHappy = function(n) {
    let slow=n;
    let fast=n;
      do{
        slow=getN(slow);
        fast=getN(fast);
        fast=getN(fast);
        }while(slow!=fast);
    if(fast === 1) return true
    return false

};
