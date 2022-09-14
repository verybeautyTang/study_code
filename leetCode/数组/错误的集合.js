/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let num1;
    let num2;
    nums.sort((a,b)=> a-b);
    nums.some((val, index)=>{
        if(index !== nums.lastIndexOf(val)){
            num1 = val;
        }
        if(nums.indexOf(index+1) === -1){
            num2 = index+1;
        }
        if(num1 && num2){
            return true
        }
    })
    return [num1, num2];
};
