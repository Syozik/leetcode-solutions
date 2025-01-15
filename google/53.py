# https://leetcode.com/problems/maximum-subarray/

from typing import List
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_sum: int = max(nums)
        sum: int =  0
        subarray = []
        for num in nums:
            if sum + num < 0:
                subarray = []
                sum = 0
                continue
            sum += num
            subarray.append(num)
            if sum >= max_sum:
                max_sum = sum
        return max_sum
    
solution = Solution()
print(solution.maxSubArray([-1, 2, 10]))