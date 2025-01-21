# https://leetcode.com/problems/camelcase-matching/

class Solution:
    def isMatch(self, word: str, pattern: str) -> str:
        idx = 0
        for letter in word:
            if idx < len(pattern) and letter == pattern[idx]:
                idx += 1
            elif "A" <= letter <= "Z":
                return False
        
        return idx == len(pattern)

    def camelMatch(self, queries: List[str], pattern: str) -> List[bool]:
        return [self.isMatch(query, pattern) for query in queries]