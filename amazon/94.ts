// https://leetcode.com/problems/missing-number

function missingNumber(nums: number[]): number {
    let sum: number = 0;
    for (let num of nums){
        sum += num;
    }
    return ((1+nums.length)*(nums.length)/2) - sum;
};