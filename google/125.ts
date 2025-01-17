// https://leetcode.com/problems/valid-palindrome/description/

function isLetter(symbol: string): boolean {
    return ("a".charAt(0) <= symbol.charAt(0) && symbol.charAt(0) <= "z".charAt(0)) || ("A".charAt(0) <= symbol.charAt(0) && symbol.charAt(0) <= "Z".charAt(0)) || ("0".charAt(0) <= symbol.charAt(0) && symbol.charAt(0) <= "9".charAt(0));

}
function isPalindrome(s: string): boolean {
    let newS: string = "";
    
    for (let symbol of s){
        if (isLetter(symbol)) newS += symbol.toLowerCase();
    }

    return newS === newS.split("").reverse().join("");
};