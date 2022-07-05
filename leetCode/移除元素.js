/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    for(let j = 0; j <nums.length; j++) {
        console.log(nums[j])
        if(nums[j] !== val) {
            nums[i] = nums[j] 
            i++
        } else{
            nums[j] = nums[j + 1] 
        }
    } 
    return  i
};
