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
 * @param {number} targetSum
 * @return {boolean}
 */
//OPTIMAL SOLUTION - O(n)
var hasPathSum = function(root, targetSum) {
//helper function
    function helper(root, targetSum) {
	//checks if root is empty and returns false if it is
        if (!root) return false;
		//checks to see if root has children 
        if (!root.left && !root.right) {
		//return only when the targetSum is the same as root value 
            return targetSum === root.val;
        }
		//calling helper function on the left/right subtrees and subtracting root.val from targetSum at every recursive call 
        return helper(root.left, targetSum-root.val) || helper(root.right, targetSum-root.val) 
    }
	//calling helper function on root
    return helper(root, targetSum)
}