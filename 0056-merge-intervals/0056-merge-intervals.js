/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;

    // Sort intervals based on the start time
    intervals.sort((a, b) => a[0] - b[0]);

    let merged = [];
    let prevInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let currentInterval = intervals[i];
        if (currentInterval[0] <= prevInterval[1]) {
            // Merge the intervals
            prevInterval[1] = Math.max(prevInterval[1], currentInterval[1]);
        } else {
            // Add the non-overlapping interval to the result
            merged.push(prevInterval);
            prevInterval = currentInterval;
        }
    }

    // Add the last interval
    merged.push(prevInterval);

    return merged;
};