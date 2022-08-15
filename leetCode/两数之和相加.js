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

// 两种方法
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let low = 0 ;
    let high = num;
    while(high >= low) {
        let mid =  low + Math.floor((high - low) / 2);
        let temp = mid * mid
        if(temp === num) {
            return true;
        }
        else if (temp < num) {
         low = mid + 1;
        } else {
               high = mid - 1;
            
        }
    }
     return false;
};
