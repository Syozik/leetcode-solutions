#  leetcode.com/problems/longest-palindrome

class Solution:
    def longestPalindrome(self, s: str) -> int:
        frequency: dict = {}
        for letter in s:
            frequency[letter] = frequency.get(letter, 0) + 1

        result: int = 0
        odd_taken = False
        for value in frequency.values():
            if value % 2 == 0:
                result += value
            else:
                if odd_taken:
                    result += value - 1
                else:
                    result += value
                    odd_taken = True
        
        return result
