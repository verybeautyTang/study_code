/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(!nums.length) return nums
    const data = [];
    let temp = []
    for(let i =0; i< nums.length;i++) {
        if(temp.length === 0 ) {
            temp.push(nums[i])
        } else {
            const templeng = temp.length - 1
            if(temp[templeng] === nums[i] - 1) {
                if(temp.length <= 1) {
                    temp.push(nums[i]) 
                } else {
                    temp.pop();
                    temp.push(nums[i])
                }
            } else {
                data.push(temp.length >1 ? temp[0] + '->' +temp[1] :  "" +temp[0] + "")
                temp = []
                temp.push(nums[i])
            }
        }
    }
   data.push(temp.length >1 ? temp[0] + '->' +temp[1] : "" +temp[0] + "")
    
    return data
};
