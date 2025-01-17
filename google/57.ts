// https://leetcode.com/problems/insert-interval/

function insert(intervals: number[][], newInterval: number[]): number[][] {

    let newIntervals: number[][] = [];
    if (intervals.length == 0)
        return [newInterval];

    let prevInterval = newInterval;
    if (newInterval[1] < intervals[0][0]){
        newIntervals.push(newInterval);
    }
    for (let idx = 0; idx < intervals.length; idx++) {
        let interval = [...intervals[idx]];
        if (prevInterval[0] <= interval[0] && prevInterval[1] >= interval[0]){
            prevInterval[1] = Math.max(interval[1], prevInterval[1]);
            if (newIntervals.length == 0 || newIntervals[newIntervals.length - 1] != prevInterval)
                newIntervals.push(prevInterval);
            continue
        }

        if (interval[0] <= newInterval[0] && newInterval[0] <= interval[1]){
            interval[1] = Math.max(interval[1], newInterval[1]);
            prevInterval = interval;
        }
        if (interval[0] > newInterval[1] && newIntervals[newIntervals.length - 1][1] < newInterval[0]){
            newIntervals.push(newInterval);
        }
        newIntervals.push(interval);
    }    
    if (newInterval[0] > intervals[intervals.length-1][1]){
        newIntervals.push(newInterval);
    }
    return newIntervals;
};


console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));