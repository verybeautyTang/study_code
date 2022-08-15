/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let hash = {}
    for(let i =0; i < nums1.length; i++) {
        if(hash || hash[nums1[i]]) {
            hash[nums1[i]] = 1
        }
    }
    for(let j = 0; j < nums2.length; j++) {
        if(hash[nums2[j]]) {
            hash[nums2[j]] += 1
        }
    }
    return Object.keys(hash).filter((i) => hash[i] > 1)
};
