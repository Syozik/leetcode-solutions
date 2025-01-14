// https://leetcode.com/problems/same-tree/submissions/1508505647/

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p == null || q == null){
        return p == q;
    }
    return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};