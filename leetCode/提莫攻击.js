/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let time = 0;
    for(let i = 0; i< timeSeries.length; i++) {
        if(i + 1 < timeSeries.length) {
            if(timeSeries[i+1] - timeSeries[i] >= duration) {
                time += duration
            } else {
                time += timeSeries[i+1] - timeSeries[i]
            }
        }
        if(i === timeSeries.length - 1) {
            time += duration
        }
    }
    return time;
};
