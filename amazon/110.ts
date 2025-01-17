// https://leetcode.com/problems/balanced-binary-tree/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function height(root: TreeNode | null): number {
    if (!root) return 0;

    let leftHeight = height(root.left);
    let rightHeight = height(root.right);
    if (leftHeight < 0 || rightHeight < 0 || Math.abs(leftHeight - rightHeight) > 1){
        return -1;
    }
    return 1 + Math.max(leftHeight, rightHeight);
}

function isBalanced(root: TreeNode | null): boolean {
    return height(root) != -1;
};