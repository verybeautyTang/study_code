/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // return s.reverse()
    let len = s.length
    let meddle = Math.floor(len >> 1)
    for (let i = 0; i < meddle; i++) {
        [s[i], s[len - i - 1]] = [s[len - i - 1], s[i]]
    }
};
