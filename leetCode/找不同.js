/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
 let data = 0;
    for (const i of s) {
        data ^= i.charCodeAt();
    }
    for (const i of t) {
        data ^= i.charCodeAt();
    }
    return String.fromCharCode(data);

};
