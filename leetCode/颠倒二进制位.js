/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let data = n.toString(2).split('');
    while(data.length !== 32) {
        data.unshift('0')
    }
    return parseInt(data.reverse().join(''), 2)

};
