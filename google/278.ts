// leetcode.com/problems/first-bad-version

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {

    return function (n: number): number {
        let l: number = 1;
        let r: number = n;
        while (r - l > 1) {
            let m = Math.floor((l + r) / 2);
            if (isBadVersion(m)) r = m;
            else l = m;
        }

        if (isBadVersion(l)) return l;
        return r;
    };
};