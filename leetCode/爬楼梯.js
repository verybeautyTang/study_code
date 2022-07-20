/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 斐波那契法
    if( n> 45 || n < 0) return 0;
    if( n === 1 || n === 2) return n;
    let one = 1;
    let two = 2;
    let three = 0;
    for(let i =3; i<= n; i++) {
        three = one + two;
        one = two;
        two = three
    }
    return two;
    // 这种方案可行 ，但是会超时
    // return climbStairs(n-1) + climbStairs(n -2)
};
