/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // 生成从1-n的数据
    let new_data =  Array.from({length: nums.length}, (v,k) => k + 1);
    // 生成nums排序以及去重
    let num = [...new Set(nums)];
    
    let hide = []
    for(let i =0 ; i< new_data.length; i++) {
        if(!num.includes(new_data[i])) {
            hide.push(new_data[i])
        }
    }
    return hide
};
