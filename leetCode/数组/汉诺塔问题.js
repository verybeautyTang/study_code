/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
var hanota = function(A, B, C) {
    if(A.length >14 )return [];
    const dfs = (n, A, B, C) => {
        if(n === 1) {
            C.push(A.pop());
            return;
        } else {
            dfs(n-1, A, C, B);
            C.push(A.pop());       
            dfs(n-1,B, A, C); 

        }
    }
    dfs(A.length, A, B, C);
    return C;
};
