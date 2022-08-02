/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let data = 0;
    n.toString(2).split('').map((i) => i == 1 ? data = data + 1 : data = data + 0)
    return data
};
