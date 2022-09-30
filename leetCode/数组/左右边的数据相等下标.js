/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // 不能用二分查找，因为排序不是固定的
    // 1、得到总数
    const total = nums.reduce((a,b) => a+b);
    // 2、前面部分要相加得到总数的一半
    let left_count = 0;
    for(let i = 0; i< nums.length; i++)  {
        if(left_count === (total - nums[i]) / 2 ) {
            return i;
        }
        else {
            left_count += nums[i]
        }
    }
    return -1;
};
