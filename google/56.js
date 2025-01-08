// https://leetcode.com/problems/merge-intervals/

const sortIntervals = function (intervals) {
  intervals.sort(([start1, end1], [start2, end2]) => start1-start2);
};

const merge = function (intervals) {
  sortIntervals(intervals);
  console.log(intervals);
  let new_intervals = [];
  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i];
    let new_interval = [...interval];
    for (let j = i + 1; j < intervals.length; j++) {
      if (new_interval[1] >= intervals[j][0]) {
        i = j;
        new_interval[1] = Math.max(new_interval[1], intervals[j][1]);
      } else break;
    }
    new_intervals.push(new_interval);
  }

  return new_intervals;
};

console.log(
  merge([[4,6],[4,5],[5,5]])
);
