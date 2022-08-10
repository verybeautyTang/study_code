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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!root) return root
    const paths = []
    const getRoot = (root,path) => {
        if(root) {
            path += root.val.toString();
            if(!root.left && !root.right) {
                paths.push(path)
            } else {
                path += "->"
                if(root.left) {
                    getRoot(root.left, path)
                }
                if(root.right) {
                    getRoot(root.right, path)
                }
            }
        }
    }   
    getRoot(root, "") 
    return paths
};
