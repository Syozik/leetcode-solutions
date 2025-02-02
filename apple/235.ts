// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/

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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {

    if (p.val > q.val){
        [p, q] = [q, p];
    }

    if (root.val >= p.val && root.val <= q.val){
        return root;
    }

    if (root.val > q.val){
        return lowestCommonAncestor(root.left, p, q);
    }

    return lowestCommonAncestor(root.right, p, q);

};