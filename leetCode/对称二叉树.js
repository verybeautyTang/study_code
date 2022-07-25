/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let isSame = true
    const compare = (left, right) => {
        if(!left && !right) return false;
        if((!left && right) || (!right && left)) { isSame = false; return false; }
        if(left.val !== right.val) isSame = false;
        compare(left.left, right.right)
        compare(left.right, right.left)
    }
    compare(root,root)
    return isSame
};
