/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    // 先去掉所有的破折号
    const delete_s =s.split('-').join('').toUpperCase()
    // 判断第一个部分应该是几个
    const mod = delete_s.length % k;
    // 刚好被整除的话就只需要给每个间隔k的加上破折号
        let ans = delete_s.substring(0, mod)
        for (let i = mod; i < delete_s.length; i += k) {
            ans += '-' + delete_s.substring(i, i + k)
        }
        if (mod === 0) ans = ans.substring(1)
        return ans
};
