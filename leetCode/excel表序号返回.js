/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const data = columnTitle.split('')
    const title = data.map((i,index) => {
        // 转化成26进制
        return (i.charCodeAt() - 64) * Math.pow(26,data.length-index-1)
    })
    return title.reduce((pre, cur) => pre + cur)
};
