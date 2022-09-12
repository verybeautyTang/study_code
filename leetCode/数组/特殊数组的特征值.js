/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    let i = 0;
    nums.sort((a,b) => a-b);
    while(i <= nums.length) {
        let temp = nums.filter((j) => j >= i);
        if(temp && temp.length === i) return i;
        i++;
    }
    return -1;
};
