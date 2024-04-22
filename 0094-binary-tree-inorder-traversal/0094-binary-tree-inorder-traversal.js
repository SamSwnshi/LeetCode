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
    
  
    
    let ans = [];
    function traversal(currentNode){
        if(currentNode === null){
            return;
        }
        
            traversal(currentNode.left)
       
        ans.push(currentNode.val)
       
            traversal(currentNode.right)
        
        
    }
    traversal(root)
    return ans
};