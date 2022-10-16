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

var isValidBST = function(root) {
     let arr = [];
    const buildArr = (root) => {
        if (root) {
            buildArr(root.left);
            arr.push(root.val);
            buildArr(root.right);
        }
    }
    buildArr(root);
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] <= arr[i - 1])
            return false;
    }
    return true;
    // if(!root) return false;
    //  let result = true;
    // const isValid = (data) => {
    //     if(!data) return ;
    //     if(data.left) {
    //         if(data.left.val >= data.val) {result = false; return false;}
    //         else {
    //             isValid(data.left)
    //         }
    //     }
    //     if(data.right) {
    //         if(data.right.val <= data.val) {
    //             result = false;
    //             return false;
    //             }
    //         else {
    //             isValid(data.right)
    //         }
    //     }
    // }
    // isValid(root);
    // return result;
};
