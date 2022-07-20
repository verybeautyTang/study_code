/**
 * @param {number[]} digits
 * @return {number[]}给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 *最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *你*可以假设除了整数 0 之外，这个整数不会以零开头。
 */
var plusOne = function(digits) {
    let indx = digits.length - 1
    while(indx > -1) {
        if(digits[indx] + 1 !== 10) {
            digits[indx] = digits[indx] + 1
            indx = -1
            return digits
        } else{
            digits[indx] = 0;
            if(indx === 0) {
                return [1, ...digits]
            } else{
                indx--;
            }
        }
    }
};
