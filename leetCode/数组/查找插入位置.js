/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length;
    let middle = 0;
    while(left < right) {
        middle = Math.floor((left + right) / 2);        
        if(nums[middle] === target) return middle;
        else if(nums[middle] > target) {
            right-- 
        } else {
            left++
        }
    }
    return left
};
