// https://leetcode.com/problems/search-in-rotated-sorted-array/https://leetcode.com/problems/search-in-rotated-sorted-array/

function search(nums: number[], target: number) {
    let l: number = 0;
    if (nums[l] == target)
        return l;
    let r: number = nums.length - 1;
    while (r - l > 1){
        let m = Math.round((l + r) / 2);
        if (nums[m] == target)
            return m;
        if (nums[l] < nums[m]){
            if (nums[l] < target && target <= nums[m]) r = m;
            else l = m;
        } else if(nums[m] < nums[r]){
            if (nums[m] < target && target <= nums[r]) l = m;
            else r = m;
        }
    }
    if (nums[l] == target) return l;
    if (nums[r] == target) return r;
    return -1;
};

console.log(search([5, 1, 3], 3)); 