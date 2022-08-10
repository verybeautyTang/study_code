/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num < 10) return num;
    let data = null;
    const getData = (nums) => {
        let new_nums = []
        if(nums < 10) {
            data= nums;
            return nums;
        } else {
            while(nums > 0) {
                new_nums.push(nums % 10)
                nums = Math.floor(nums / 10)
            }
            getData(new_nums.reduce((a,b) => a + b))
        }

    }
    getData(num)
    return data
};
