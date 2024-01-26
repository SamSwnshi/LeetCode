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
function isBST(root,min ,max){
    if(root === null){return true}
    if(root.val > min && root.val< max){
        let left = isBST(root.left,min,root.val)
        let right = isBST(root.right,root.val,max)
        return left && right;
    }
    else{return false}
}
var isValidBST = function(root) {
    let min = -Infinity;
    let max = Infinity;
    return isBST(root,min,max)
};