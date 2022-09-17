/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hash ={}
    for(let i = 0; i< nums.length; i++) {
        if(!hash[nums[i]]) {
            hash[nums[i]] = 1
        } else {
            hash[nums[i]] +=1
        }
    }
    return Object.keys(hash).filter((i) => hash[i] > nums.length/2)[0]
};
