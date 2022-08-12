/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let hash = {}
    const s_array = s.split(" ");
    // 如果长度不一致，直接返回
    if(pattern.length !== s_array.length) return false
    for(let i =0; i< s_array.length; i++ ){
        if(!hash[pattern[i]]) {
            if(!Object.keys(hash).length) {
                hash[pattern[i]] = s_array[i]
            }
            else if (Object.keys(hash).filter((j) => hash[j] === s_array[i]).length > 0) {
                return false;
            } else {
                 hash[pattern[i]] = s_array[i]
            }
        } else {
            if(hash[pattern[i]] !== s_array[i]) {
                return false
            }
        }
    }
    return true
};
