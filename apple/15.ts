// https://leetcode.com/problems/3sum/

function threeSum(nums: number[]): number[][] {
    let result: number[][] = [];
    nums = nums.sort((a,b)=>a-b);
    
    let i = 0;
    while (i <= nums.length - 3){
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k){
            let sum = nums[i] + nums[j] + nums[k]
            if (sum == 0){ 
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                while (nums[j] == nums[j-1]){
                    j++;
                }
            }
            else if (sum < 0) j++;
            else k--;

        }
        i++;
        while (nums[i] == nums[i-1]){
            i++;
        }
    }

    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));