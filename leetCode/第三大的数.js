/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    // 如果小于3个，就直接取最大的
    const data =[...new Set(nums.sort((a, b) => b - a))]
    if(data.length < 3) return data[0]
    return data[2];
}
