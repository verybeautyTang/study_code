/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let data = 0;
    for(let i = 0; i< sentences.length; i++) {
        const temp = sentences[i].split(' ')
        data = Math.max(data, temp.length)
    }
    return data
};
