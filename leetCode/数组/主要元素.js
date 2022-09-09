/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // 数组中占比超过一半的元素称之为主要元素
    let hash = {}
    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]]) {
            hash[nums[i]] +=1;
        } else {
            hash[nums[i]] = 1
        }
    }
    const data = Object.keys(hash).filter((i) => 
        hash[i] > Math.floor(nums.length /2)
    )
    return data.length ? +data[0] : -1
};
