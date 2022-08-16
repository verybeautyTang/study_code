/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(magazine.length < ransomNote.length) return false;
    const hash = {}
    for(let i =0 ; i< magazine.length; i++) {
        hash[i] = magazine[i]
    }
    for(let j =0 ; j < ransomNote.length; j++) {
        let temp = Object.keys(hash).findIndex((i) => hash[i] === ransomNote[j])
        if(temp > -1) {
            hash[temp] = null;
             
        }
         else {
            return false
        }
    }
    return true
};
