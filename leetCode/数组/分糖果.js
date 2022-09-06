/**
 * @param {number[]} candyType
 * @return {number}
 */
 var distributeCandies = function(candyType) {
    // 可以吃到的糖果个数
    const count = candyType.length / 2;
    // 糖果的种类
    const types = [...new Set(candyType)]
    // 如果糖果的种类比可以吃到的糖果个数少，则直接返回糖果的种类个数
    if(types.length <= count) {
        return types.length
    }
    return count;
};