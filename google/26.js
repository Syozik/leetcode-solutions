// https://leetcode.com/problems/climbing-stairs/description/
const climbStairs = function(n) {
    let fib = [1,1];
    for (let i=2;i<=n;i++){
        fib.push(fib[i-1]+fib[i-2]);
    }
    return fib[n];
};