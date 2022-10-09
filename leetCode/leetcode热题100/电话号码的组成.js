/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let hash ={
        '2':['a','b','c'],
        '3':['d','e','f'],
        '4':['g','h','i'],
        '5':['j','k','l'],
        '6':['m','n','o'],
        '7':['p','q','r','s'],
        '8':['t','u','v'],
        '9':['w','x','y','z'],
    }
        if(!digits) return [];
        let nums = digits.split('');
        let result = [];
        for(let i = 0; i< nums.length; i++) {
            const current = nums[i];
            const currntHash = hash[current];
            if(i === 0) {
                result = currntHash;
                continue
            }
            let temp = [];
            for (let j = 0; j < result.length; j++) {
            for (let k = 0; k < currntHash.length; k++) {
                temp.push(result[j] + currntHash[k])
            }
        }
        result = temp
        }

    return result

};
