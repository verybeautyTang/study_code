/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let data = [];
    for(let i = 0; i< nums.length; i++) {
        if(nums[i] % 2 === 0) data.push(nums[i])
        else data.unshift(nums[i])
    }
    return data
};
