/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // let i = 0;
    // while(i < nums.length) {
    //     if(nums.filter((j) => j === nums[i]).length >= 2 ) {
    //         return nums[i]
    //     } else {
    //         i++;
    //     }
    // }
     const n = nums.length;
    let l = 1, r = n - 1, ans = -1;
    while (l <= r) {
        let mid = (l + r) >> 1;
        let cnt = 0;
        for (let i = 0; i < n; ++i) {
            cnt += nums[i] <= mid;
        }
        if (cnt <= mid) {
            l = mid + 1;
        } else {
            r = mid - 1;
            ans = mid;
        }
    }
    return ans;

};
