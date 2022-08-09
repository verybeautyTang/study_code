/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return root;
    let father = null;
    const getPath = (root,target) =>  {
        const path = [];
        let node = root;
        while (node !== target) {
            path.push(node);
            if (target.val < node.val) {
            node = node.left;
            } else {
            node = node.right;
            }
        }
        path.push(node);
        return path;
    }
    let getRootP = getPath(root, p);
    let getRootQ = getPath(root, q);
    for(let i= 0; i< getRootQ.length & i< getRootP.length; i++) {
        if(getRootQ[i] === getRootP[i]) {
            father = getRootQ[i]
        }
    }
    return father
};
