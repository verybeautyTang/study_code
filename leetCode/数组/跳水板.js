/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
    if(k <=0) return [];

    let shortLength = k;
    let longLength  = 0;
    let data = [];
    while(longLength <= k) {
        data.push(shortLength * shorter + longer * longLength);
        longLength++;
        shortLength--;
    }
    return [...new Set(data)];
};
