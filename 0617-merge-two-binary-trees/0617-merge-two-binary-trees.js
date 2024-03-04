/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if(!root1) return root2;
    if(!root2) return root1
    
    const queue = [[root1,root2]]
    while(queue.length > 0){
        const [n1,n2] = queue.shift()
        
        n1.val += n2.val
        
        if(n1.left && n2.left){
            queue.push([n1.left,n2.left])
        }else if(!n1.left){
            n1.left = n2.left
        }
        
        if(n1.right && n2.right){
            queue.push([n1.right,n2.right])
        }else if(!n1.right){
            n1.right = n2.right
        }
    }
    
    return root1
};