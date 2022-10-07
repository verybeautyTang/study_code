/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
let hash = {};
for(let i = 0; i< nums.length; i++) {
    if(!hash || hash[nums[i]] === undefined) {
        hash[nums[i]] = 1
    } else {
        hash[nums[i]] += 1
    }
}
return Object.keys(hash).filter((i) => hash[i] === 1)
};
