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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;

    const q = [root]
        let ans = 0;
    while(q.length !== 0){
        ans++
        let l = q.length;
        for(let i = 0 ;i< l;i++){
            if(q[i].left) q.push(q[i].left);
            if(q[i].right) q.push(q[i].right)
        }
        q.splice(0,l)
    }
    return ans;
    
};