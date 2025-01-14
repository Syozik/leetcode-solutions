# https://leetcode.com/problems/container-with-most-water
from typing import List

class Solution:
    def maxArea(self, height: List[int]) -> int:
        left: int = 0
        right: int = len(height) - 1
        maxArea: int = 0
        while left != right:
            area = (right - left)*(min(height[left], height[right]))
            maxArea = max(area, maxArea)
            if (height[left] > height[right]):
                right -= 1
            else:
                left += 1
        return maxArea
    

solution = Solution()
print(solution.maxArea([1,8,6,2,5,4,8,3,7]))