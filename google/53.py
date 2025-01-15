# https://leetcode.com/problems/maximum-subarray/

from typing import List
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_sum: int = max(nums)
        sum: int =  0
        for num in nums:
            if sum + num < 0:
                sum = 0
                continue
            sum += num
            if sum >= max_sum:
                max_sum = sum
        return max_sum
    
solution = Solution()
print(solution.maxSubArray([-1, 2, 10]))