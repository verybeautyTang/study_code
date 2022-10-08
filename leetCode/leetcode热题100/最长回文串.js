/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // 中心算法
    if(s.length < 2) return s;
    let left = 0;
    let maxLen = 0;
    let maxStart = 0;
    let len = 1;
    let right = 0;
    
    for(let i = 0; i < s.length; i++) {
        left = i -1;
        right = i + 1;
        while(left >= 0 && s.charAt(left) === s.charAt(i)) {
            len++;
            left--;
        };
        while(right < s.length && s.charAt(right) === s.charAt(i)){
            len++;
            right++
        };
        while(left >= 0 && right< s.length && s.charAt(left) === s.charAt(right)) {
            len += 2;
            left --;
            right++;
        }
        if(len > maxLen) {
            maxLen = len;
            maxStart = left;
        }
        len = 1;
    }
    return s.substring(maxStart+1, maxStart + maxLen + 1)
};
