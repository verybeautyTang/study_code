/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let result = s.trim().match(/^[-|+]{0,1}[0-9]+/)
    if(result != null){
        if(result[0] > (Math.pow(2,31) -1)){
            return Math.pow(2,31) -1
        }
        if(result[0] < Math.pow(-2,31)){
            return Math.pow(-2,31)
        }

        return result[0]
    }
    return 0;
};
