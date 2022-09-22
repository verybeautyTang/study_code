/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
   let p = 0, q = numbers.length - 1
    while(p < q) {
        const addition = numbers[p] + numbers[q]
        if(addition == target) return [p, q]
        else if(addition < target) p += 1
        else q -= 1
    }
};
