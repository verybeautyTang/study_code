/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    // 取第一个数组作为目标数组从中进行筛选过滤
    const target = nums.shift()
    return target.filter(num => {
        return nums.every((v) => v.includes(num))
    }).sort((a, b) => a - b)
};

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    // 找出长度最小的数据 及 下标
    let minArr = nums[0], minIdx = 0
    for(let i = 1; i < nums.length; i++) {
        if(nums[i].length < minArr.length) {
            minArr = nums[i]
            minIdx = i
        }
    }
    // 对最小数组匹配每个数据是否都有该值  过滤的值进行排序
    return minArr.filter(num => {
        return nums.every((v, i) => {
            // 过滤掉当前数组本身
            if(i === minIdx) return true
            return v.includes(num)
        })
    }).sort((a, b) => a - b)
};
