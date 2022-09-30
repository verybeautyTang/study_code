/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const index = new Array(26).fill(0);
    for (let i = 0; i < order.length; ++i) {
        index[order[i].charCodeAt() - 'a'.charCodeAt()] = i;
    }
    for (let i = 1; i < words.length; i++) {
        let valid = false;
        for (let j = 0; j < words[i - 1].length && j < words[i].length; j++) {
            let prev = index[words[i - 1][j].charCodeAt() - 'a'.charCodeAt()];
            let curr = index[words[i][j].charCodeAt() - 'a'.charCodeAt()];
            if (prev < curr) {
                valid = true;
                break;
            } else if (prev > curr) {
                return false;
            }
        }
        if (!valid) {
            /* 比较两个字符串的长度 */
            if (words[i - 1].length > words[i].length) {
                return false;
            }
        }
    }
    return true;
};
