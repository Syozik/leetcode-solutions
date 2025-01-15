# https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

from typing import List

class Solution:
    def findMin(self, nums: List[int]) -> int:
        l = 0
        r = len(nums) - 1
        if (nums[0] < nums[-1]):
            return nums[0]
        while r - l >  1:
            m = (r+l)//2
            if (nums[l] > nums[m]):
                r = m
            elif nums[r] < nums[m]:
                l = m
        return min(nums[r], nums[l])

solution = Solution()
print(solution.findMin([1,2,3,4,5]))