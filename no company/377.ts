// https://leetcode.com/problems/combination-sum-iv/
function combinationSum4(nums: number[], target: number): number {
    
    let possibleCombinations = new Array(target + 1).fill(0);
    possibleCombinations[0] = 1;

    for (let i = 1; i <= target; i++) {
        for (let num of nums) {
            if (i - num >= 0) {
                possibleCombinations[i] = possibleCombinations[i] + possibleCombinations[i - num];
            }
        }
    }

    return possibleCombinations[target];
};

