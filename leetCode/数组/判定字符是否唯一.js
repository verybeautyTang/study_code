/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
    let setData = new Set(astr)
    return setData.size === astr.length
};
