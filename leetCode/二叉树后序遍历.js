 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let data = [];
    const getConfig = (root) => {
        if(root.left) getConfig(root.left);
        if(root.right) getConfig(root.right);
         data.push(root.val);
    }
    if(root) getConfig(root)
    
    return data
};
