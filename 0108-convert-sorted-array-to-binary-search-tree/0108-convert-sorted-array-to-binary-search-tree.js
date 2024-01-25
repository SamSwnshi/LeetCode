/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */


var sortedArrayToBST = function(nums) {
    
    const binarySearch = (start,end)=>{
        if(start > end){ 
            return null;
        }
        
        const mid = Math.floor((start+ end)/2);
        const node = new TreeNode(nums[mid]);
        
        node.left = binarySearch(start,mid -1)
        node.right = binarySearch(mid+ 1,end)
        return node;
        
    }
    
    return binarySearch(0,nums.length - 1)
};