/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    // 获取孩子个数和饼干个数
    const child = g.length, cookie = s.length;
    // 设置被满足的孩子初始为0个
    let count = 0;
    for (let i = 0, j = 0; i < child && j < cookie; i++, j++) {
        // 判断孩子的胃口是不是比饼干达
        while (j < cookie && g[i] > s[j]) {
            j++;
        }
        if (j < cookie) {
            count++;
        }
    }
    return count;
};
