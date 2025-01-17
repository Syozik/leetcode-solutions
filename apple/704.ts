// https://leetcode.com/problems/binary-search/

function search(nums: number[], target: number): number {
    let l: number = 0;
    let r: number = nums.length - 1;
    let m = Math.floor((l + r) / 2);

    while (r - l > 1) {
        if (nums[m] === target) return m;

        if (nums[m] < target) l = m;
        else r = m;

        m = Math.floor((l+r)/2);
    }
    if (nums[l] === target) return l;
    if (nums[r] === target) return r;
    return -1;
};