/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if(s.length <1 || s.length > 15) return false;
    // 转换成数组
    const empData = s.split('');
    // 默认值为0
    let resultData = 0;
    // 获取计算后的数据
    const new_data = []
    // 转换规则
    const transform = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'X': 10,
        'L':50,
        'IX': 9,
        'XL': 40,
        'C': 100,
        'XC': 90,
        'D': 500,
        'M': 1000,
        'CD': 400,
        'CM': 900,
    }
    // 特殊数据处理
    const specialData= ['IV', 'IX', 'XL','XC','CD','CM']
    // 生成可以直接计算的数据
    for(let i = 0; i< empData.length; i++) {
        if(specialData.includes(empData[i] + empData[i+ 1])) {
            new_data.push((empData[i] + empData[i+ 1]))
            i++;
        }
        else {
        new_data.push(empData[i])
        }
    }
    // 数据相加转换回去
        for(let i = 0; i< new_data.length; i++) {
        resultData += transform[new_data[i]]
            }
            return resultData
    
};
