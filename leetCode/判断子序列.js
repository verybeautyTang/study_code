/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = j =0;
    let data = s.split('')
    while(i < data.length && j< t.length) {
        if(data[i] === t[j]) {
           data[i] = ''
            i++;
            j++;
        }
        if(data[i] !== t[j]) {
            j++;
        }
    }
    return !data.join('').length
};
