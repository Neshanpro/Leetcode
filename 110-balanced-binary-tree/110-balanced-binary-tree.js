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
var isBalanced = function(root) {
    function dfs(root) {
        if(!root) return {'isBal' : true, 'ht' : 0};
        let left = dfs(root.left);
        let right = dfs(root.right);        
        let balanced = (left['isBal'] && right['isBal'] && Math.abs(left['ht'] - right['ht']) <= 1)
        return {isBal: balanced, ht : 1 + Math.max(left['ht'], right['ht'])}
    }
    return dfs(root)['isBal'];
};