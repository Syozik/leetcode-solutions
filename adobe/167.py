# https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/?envType=study-plan-v2&envId=top-interview-150

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        i = 0
        j = len(numbers) - 1
        while i != j:
            result = numbers[i] + numbers[j]
            if result == target:
                return [i+1,j+1]
            elif result > target:
                j -= 1
            else:
                i += 1
        