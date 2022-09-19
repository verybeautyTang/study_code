/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
 let set1 = new Set(), set2 = new Set();

    for (let i = 0; i < nums1.length; i++) { //nums1 中所有 不 存在于 nums2 中的 不同 整数
        if (!nums2.includes(nums1[i])) {
            set1.add(nums1[i]); //存储的是nums1里的数据 （这些数据都不在nums2里）
        }
    }

    for (let i = 0; i < nums2.length; i++) { //nums2 中所有 不 存在于 nums1 中的 不同 整数
        if (!nums1.includes(nums2[i])) {
            set2.add(nums2[i]) //存储的是nums2里的数据 （这些数据都不在nums1里）
        }
    }
    return [Array.from(set1), Array.from(set2)];
};
