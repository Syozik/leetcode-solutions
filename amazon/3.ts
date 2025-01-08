// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
  let leftPointer: number = 0;
  let maxLength: number = 0;
  let substring: Set<string> = new Set();
  
  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    while (substring.has (s[rightPointer])){
        substring.delete(s[leftPointer]);
        leftPointer++;
    }

    substring.add(s[rightPointer]);
    maxLength = Math.max(maxLength, rightPointer - leftPointer);
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("pwwkew"));
