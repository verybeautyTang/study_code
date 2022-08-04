/**
 * @param {number[]} nums
 * @return {boolean}
 */
//  let hash =  {}
var containsDuplicate = function(nums) {
    const set = new Set(nums)
    if(set.size !== nums.length) return true 
    return false
    // for(let i = 0;i< nums.length; i++) {
    //     if(hash[nums[i]]) {
    //         hash[nums[i]] +=1
    //     } else {
    //         hash[nums[i]] = 1
    //     }
        
    // }
    // console.log(hash)
    // return Object.keys(hash).filter((i) => hash[i] > 1).length
};
