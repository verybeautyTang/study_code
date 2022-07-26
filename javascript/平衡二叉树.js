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
var isBalanced = function(root) {
 let res = true;
    (function(root){
        // 如果res为false，就不需要再做其他判断了，一定不是平衡二叉树，所以可以直接返回
        if(!root || !res) return 0;
        const left = arguments.callee(root.left);
        const right = arguments.callee(root.right);
        if(Math.abs(left - right) > 1) {
            res = false;
        }
        return Math.max(left, right) + 1;
    })(root);
    return res;
};
