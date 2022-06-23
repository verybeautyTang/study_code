/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let datas = []
    nums.forEach((data, index) => {
        let anotherData = target - data
        const otherIndex = nums.findIndex((e,inx) => e === anotherData && index !== inx)
        if(otherIndex > 0 && datas.length !== 2) {
            datas.push(index)
            datas.push(otherIndex)
        }
    })
    return datas
};
