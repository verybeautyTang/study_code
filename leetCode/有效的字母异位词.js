/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== s.length) return false
    return [...s].sort().join('') === [...t].sort().join('')
};
