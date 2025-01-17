#  leetcode.com/problems/ransom-note

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        magazineLetters: dict = {}
        for letter in magazine:
            magazineLetters[letter] = magazineLetters.get(letter, 0) + 1
        
        for letter in ransomNote:
            if (magazineLetters.get(letter, 0) == 0):
                return False
            magazineLetters[letter] -= 1
        
        return True