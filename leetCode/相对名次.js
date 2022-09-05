/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {

// 排序[深拷贝]
const scoreData = [...score].sort((a,b) => b - a)
// 根据排序
for(let i = 0; i< score.length; i++) {
    let val = score[i];
    let rank = scoreData.indexOf(val) + 1;
    if(rank === 1) {
        score[i] = "Gold Medal"
    } else if(rank === 2) {
        score[i] = "Silver Medal"
    } else if(rank === 3) {
        score[i] = "Bronze Medal"
    } else {
        score[i] =  rank + ""
    }
}
return score;
};
