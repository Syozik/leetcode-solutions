# leetcode.com/problems/evaluate-reverse-polish-notation

class Solution:
    OPERATIONS = ("+", "-", "*", "/")
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        for token in tokens:
            if (token in self.OPERATIONS):
                s2 = stack.pop()
                s1 = stack.pop()
                match token:
                    case "+":
                        stack.append(s1 + s2)
                    case "-":
                        stack.append(s1 - s2)
                    case "*":
                        stack.append(s1*s2)
                    case "/":
                        stack.append(int(s1 / s2))
            else:
                stack.append(int(token))

        return stack.pop()