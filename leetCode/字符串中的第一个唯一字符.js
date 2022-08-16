/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hash ={}
    for(let i =0; i < s.length ;i++) {
        if(!hash || !hash[s[i]]) {
            hash[s[i]] = 1
        } else {
            hash[s[i]] += 1
        }
    }
    const data = Object.keys(hash).filter((i) => hash[i] === 1)
    if(!data.length) return -1
    return s.split('').findIndex((i) => i === data[0])
  
};
