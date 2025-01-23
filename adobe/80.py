# https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        idx = 1
        repeats = 1
        for i in range(1, len(nums)):
            # nums[i] nums[idx - 1]
            if nums[i] != nums[idx - 1]:
                nums[idx] = nums[i]
                repeats = 1
                idx += 1
            elif repeats < 2:
                nums[idx] = nums[i]
                repeats += 1
                idx += 1
        
        return idx