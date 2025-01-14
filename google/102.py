# https://leetcode.com/problems/binary-tree-level-order-traversal/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        result = []

        if not root:
            return []
        
        deque = [root]

        while deque:
            level = []
            for _ in range(len(deque)):
                level.append(deque[0].val)
                if (deque[0].left):
                    deque.append(deque[0].left)
                if (deque[0].right):
                    deque.append(deque[0].right)

                deque = deque[1:]
            result.append(level)
        
        return result