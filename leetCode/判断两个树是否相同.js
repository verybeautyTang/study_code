/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let isSame = true
    const compare = (data1, data2) => {
        if(!data1&&!data2) return ;
        if((data1&&!data2)||(!data1&&data2)) {isSame = false;return ;}
        compare(data1.left, data2.left);
        if(data1.val !== data2.val) isSame = false
        compare(data1.right, data2.right);
    }
    compare(p, q)
    return isSame
};
