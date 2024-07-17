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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
     const toDeleteSet = new Set(to_delete);
    const res = [];

    const helper = (node, isRoot) => {
        if (!node) return null;
        
        const rootDeleted = toDeleteSet.has(node.val);
        if (isRoot && !rootDeleted) {
            res.push(node);
        }
        
        node.left = helper(node.left, rootDeleted);
        node.right = helper(node.right, rootDeleted);
        
        return rootDeleted ? null : node;
    };

    helper(root, true);
    return res;
};
function buildTree(arr) {
    if (!arr.length) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (i < arr.length) {
        const current = queue.shift();
        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }
    return root;
}