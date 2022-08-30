/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    // 获取num数据的二进制
    const get2num = num.toString(2);
    // get2num取反
    let reverse2num = ""
    for(let i = 0; i< get2num.length;i++) {
        reverse2num += get2num[i] == 0 ? '1': '0'
    }
    // 将反转的二进制改为10进制
    return parseInt(reverse2num, 2)
    
};
