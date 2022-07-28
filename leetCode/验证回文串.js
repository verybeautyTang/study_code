/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let s_string = /[a-zA-Z0-9]/ // 匹配所有的字母
    const s_old = s.split('').map((j) => j.toLowerCase())
    const s_new = s_old.filter((i) => i.match(s_string))
    return s_new.join('') === s_new.reverse().join('')
};
