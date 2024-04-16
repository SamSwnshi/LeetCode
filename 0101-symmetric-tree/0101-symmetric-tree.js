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
    if(!root){
        return root
    }
    
    return isEqual(root.left,root.right)
};

var isEqual= function(rootleft,rootright){
    if ((!rootleft && rootright) || (rootleft && !rootright) || (rootleft && rootright && rootleft.val !== rootright.val)){
        return false;
    }
    
    if(rootleft && rootright){
        return isEqual(rootleft.left,rootright.right) && isEqual(rootleft.right,rootright.left)
    }
    return true
}