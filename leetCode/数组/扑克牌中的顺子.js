/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
 nums.sort((a,b)=>a-b)
    // 0 的个数,第一个非0的坐标
    let zero = nums.lastIndexOf(0)+1
    let count = 0
    let len = nums.length
    for(let i=zero;i<len-1;i++){
        let cut = nums[i+1]-nums[i]-1
        // 这里等于-1代表两个数相等的，那肯定不是顺子
        if(cut == -1){
            return false
        }
        count+=cut
    }
    return zero>=count?true:false
};
