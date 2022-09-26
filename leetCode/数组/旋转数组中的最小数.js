/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    return numbers.sort((a,b) => a-b)[0]
};
