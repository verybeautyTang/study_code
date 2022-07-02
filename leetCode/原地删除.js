/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let data = []
    for(let i = 0; i< nums.length; i++) {
        if(!data.includes(nums[i])) {
            data.push(nums[i])
        }
    }
    console.log(data)
    return data
};
