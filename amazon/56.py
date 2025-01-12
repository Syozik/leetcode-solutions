
# https://leetcode.com/problems/powx-n/

class Solution:
    def findPow(self, pows: dict, pow: int) -> int:
        powsList: list = sorted(list(pows.keys()), reverse=True)
        for i in range(len(powsList)):
            if powsList[i] <= pow:
                return powsList[i]

    def myPow(self, x: float, n: int) -> float:
        if n==0:
            return 1
        
        pows: dict = {1: x}
        negative: bool = n < 0
        n = abs(n)
        curr_pow: int = 1
        while curr_pow != n:
            pow = self.findPow(pows, n - curr_pow)
            curr_pow += pow
            x *= pows[pow]
            pows[curr_pow] = x
        if negative:
            return 1/x
        else: 
            return x

solution = Solution()
print(solution.myPow(2, 0))