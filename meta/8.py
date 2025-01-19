# leetcode.com/prob;ems/string-to-integer-atoi

class Solution:
    def myAtoi(self, s: str) -> int:
        n: int = 0
        s = s.strip()
        if len(s) == 0:
            return 0
        negative: bool = s[0] == "-"
        if s[0] == "-" or s[0] == "+": 
            s = s[1:]
        
        for symbol in s:
            if ord("0") <= ord(symbol) <= ord("9"):
                n = n * 10 + ord(symbol) - ord("0")
                if n >= 2147483648:
                    n = 2147483648
                    break
            else: 
                break
        return -n if negative else min(n, 2147483647)