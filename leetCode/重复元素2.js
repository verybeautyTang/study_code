/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
//  const hash = {}
// var containsNearbyDuplicate = function(nums, k) {
// for(let i = 0;i< nums.length; i++) {
//         if(hash[nums[i]]) {
//             hash[nums[i]] = [Math.abs(i - hash[nums[i]][0]), hash[nums[i]][0]+ 1]
//         } else {
//             hash[nums[i]] = [i, 0]
//         }
//     }
//     return  Object.keys(hash).filter((i) => hash[i][1] > 0 && hash[i][0]<=k ).length 
// };
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        const num = nums[i];
        if (map.has(num) && i - map.get(num) <= k) {
            return true;
        }
        map.set(num, i);
    }
    return false;
};
