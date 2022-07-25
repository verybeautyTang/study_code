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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    let hasPath = [];
    const getPath = (root, sum, targetSum) => {
        if(!root && sum === targetSum) return hasPath.push(true);
        if(!root && sum !== targetSum) return hasPath.push(false);
        if(root.left && !root.right) {
       getPath(root.left,sum+root.val, targetSum);
        }
         else if(!root.left && root.right) {
        getPath(root.right,sum+root.val,targetSum);
        }
        else {
       getPath(root.left,sum+root.val, targetSum);
        getPath(root.right,sum+root.val,targetSum);
        }
 
    }
    getPath(root, 0, targetSum);
    return !!hasPath.find((i) => i)
};
