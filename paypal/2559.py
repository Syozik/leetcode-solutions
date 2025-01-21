class Solution:
    def vowelStrings(self, words: List[str], queries: List[List[int]]) -> List[int]:
        vowels = {'a', 'e', 'i', 'o', 'u'}
        result = [None] * len(words)
        result[0] = (words[0][0] in vowels and words[0][-1] in vowels)
        for i in range(1, len(words)):
            result[i] = result[i-1]+(words[i][0] in vowels and words[i][-1] in vowels)

        return [result[query[1]] - (result[query[0]-1] if query[0] != 0 else 0) for query in queries]