/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
      const sb = '';
    if (n % 2 === 1) {
        return sb + 'a'.repeat(n);;
    }
    return sb + 'a'.repeat(n - 1) + 'b';
};
