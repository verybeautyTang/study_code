/**
 * @param {string} s
 * @return {number}
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
 *单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
 */
var lengthOfLastWord = function(s) {
    let splitStr = s.split(' ');
    splitStr = splitStr.filter((i) => !!i)
    return splitStr[splitStr.length - 1].length
};

// 方案2
    let j = 0
    let i = s.length - 1
    while(s[i] === ' ') i--
    while(i>= 0) {
        if(s[i] === ' ' && j === 0) i--;
        if(s[i] === ' ' && j > 0) return j 
        else {
            j++;
            i--;
        }
    }
    return j
