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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
     let result = [];
    if(!root) return result;
    let queue = []
    while(root ||queue.length > 0){
       while(root){
           queue.push(root)
           root = root.left
       }
        root = queue.pop();
        result.push(root.val)
        root = root.right
    }
    return result
};