// https://leetcode.com/problems/valid-parentheses/description/
class Stack {
  constructor() {
    this.parentheses = [];
    this.pairs = {"(":")", "[":"]", "{":"}"};
}

  push(bracket) {
    this.parentheses.push(bracket);
  }

  pop(bracket) {
    
    if (this.pairs[this.parentheses[this.parentheses.length - 1]] != bracket) return false;
    return this.parentheses.pop();
  }


  isEmpty(){
    return this.parentheses.length === 0;
  }
}

const isValid = function(s){
    let brackets = new Stack();
    const opening = ["(", "[", "{"];
    for (let i=0; i<s.length; i++){
        if (opening.includes(s[i])){
            brackets.push(s[i]);            
        }
        else if (brackets.pop(s[i])===false)
            return false;
    }

    return brackets.isEmpty();
}

console.log(isValid("()[]"))