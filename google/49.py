# https://leetcode.com/problems/group-anagrams/description/
class Solution:
    def getAnagram(self, word):
        letters = {}
        for letter in word:
            letters[letter] = letters.get(letter, 0) + 1     
        return letters
    
    def groupAnagrams(self, strs):
        anagrams = []
        for word in strs:
            anagram = self.getAnagram(word)
            for i in range(len(anagrams)):
                if anagrams[i][0] == anagram:
                    anagrams[i][1].append(word)
                    break
            else:
                anagrams.append([anagram, [word]])
        return [words for [anagram, words] in anagrams]