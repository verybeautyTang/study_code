/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 三数之和数不能小于3位数
    if(nums.length < 3) return [];
    // 双指针
    let L = 0;
    let R = 0;
    let data = []
    nums.sort((i, j) => i - j);
    if(nums[0] > 0) return []
    for(let k = 0; k < nums.length; k++) {
        if(k > 0 && nums[k] === nums[k-1]) continue; // 去重
        L = k + 1;
        R = nums.length - 1;
        while(L < R) {
            const sum = nums[k] + nums[L] + nums[R];
            if(sum == 0){
                data.push([nums[k],nums[L],nums[R]]);
                while (L<R && nums[L] == nums[L+1]) L++; // 去重
                while (L<R && nums[R] == nums[R-1]) R--; // 去重
                L++;
                R--;
            }
            else if (sum < 0) L++;
            else if (sum > 0) R--;
        }
    }
    return data;
};
