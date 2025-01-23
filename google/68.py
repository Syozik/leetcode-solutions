# https://leetcode.com/problems/text-justification

from typing import List
from math import ceil

class Solution:
    def formatString(self, strings: List[str], width:int, end:bool = False) -> str:
        if end:
            return " ".join(strings) + " "*(width - sum([len(string) for string in strings]) - len(strings) + 1)
        
        spaces = width - sum([len(string) for string in strings])
        result: str = ""
        used_spaces = 0
        for i in range(len(strings)):
            if i != 0 or len(strings) == 1:
                result += " "*(ceil((spaces-used_spaces)/(len(strings)-i)))
                used_spaces += (ceil((spaces-used_spaces)/(len(strings)-i)))
            result += strings[i]

        return result

    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        result: List[str] = []
        new_string: List[str] = []
        length: int = 0
        for word in words:
            length += len(word) + 1
            if length <= maxWidth:
                new_string.append(word)
            else:
                result.append(self.formatString(new_string, maxWidth))
                new_string = [word]
                length = len(word)
        result.append(self.formatString(new_string, maxWidth, True))
        return result
    
solution = Solution()
print(solution.fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16))