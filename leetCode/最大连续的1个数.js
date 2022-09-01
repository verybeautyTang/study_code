/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let data = [];
    let temp = []
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            temp.push(1);
        } else {
            data.push(temp.length);
            temp = []
        }
    }
    if(temp.length) {
        data.push(temp.length);
        temp = [];
    }
    return data.sort((a,b) => b-a)[0]

};
