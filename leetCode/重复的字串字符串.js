/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const length = s.length;
    let str = '';
    for (let i = 0; i < s.length - 1; i++) {
        str += s[i];
        if (s === str.repeat(Math.floor(length / str.length))) {
        return true;
        }
    }
  return false;
};
