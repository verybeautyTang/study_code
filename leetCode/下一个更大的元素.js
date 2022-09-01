/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const m = nums1.length, n = nums2.length;
    const res = new Array(m).fill(0);
    for (let i = 0; i < m; ++i) {
        let j = 0;
        while (j < n && nums2[j] !== nums1[i]) {
            ++j;
        }
        let k = j + 1;
        while (k < n && nums2[k] < nums2[j]) {
            ++k;
        }
        res[i] = k < n ? nums2[k] : -1;
    }
    return res;
};
