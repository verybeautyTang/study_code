/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var arr = [];
    var left = 0;
    var right = nums.length - 1;
    while(left < right){
        var temp = nums[left] + nums[right];
        if(temp == target){
            arr.push(nums[left]);
            arr.push(nums[right]);
            break;
        }else if(temp < target){
            left ++;
        }else{
            right --;
        }
    }
    return arr;
};
