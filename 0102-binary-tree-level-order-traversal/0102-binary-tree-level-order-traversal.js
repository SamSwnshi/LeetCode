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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root];
    let level = [];
    
    while(queue.length > 0){
    let leng = queue.length;
        let currLevel = []
        for(let i = 0; i < leng; i++){
            const curr = queue.shift();
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
            currLevel.push(curr.val)
        }
        level.push(currLevel)
    }
    return level
};