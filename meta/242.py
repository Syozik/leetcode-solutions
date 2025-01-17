# https://leetcode.com/problems/valid-anagram/description/

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        anagram:dict = {}
        for i in range(len(s)):
            anagram[s[i]] = anagram.get(s[i], 0) + 1
            anagram[t[i]] = anagram.get(t[i], 0) - 1
        
        return all([v == 0 for v in anagram.values()])