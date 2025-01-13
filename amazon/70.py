#  https://leetcode.com/problems/climbing-stairs/
class Solution:
    def climbStairs(self, n:int) -> int:
        possible_steps: list = [1, 1]
        while len(possible_steps) != n+1:
            possible_steps.append(possible_steps[len(possible_steps)-1]+possible_steps[len(possible_steps)-2])

        return possible_steps[-1]
    

solution = Solution()
print(solution.climbStairs(3))