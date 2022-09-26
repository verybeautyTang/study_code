/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    let data = []
    for(let i = 1; i< Math.pow(10, n); i++) {
        data.push(i)
    }
    return data
};
