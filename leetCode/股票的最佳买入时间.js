/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let getSmall = prices[0];
    let getLarge = 0;
    if(prices.length === 1) return 0
    for(let i =0; i< prices.length; i++) {
         getLarge = Math.max(getLarge, prices[i] - getSmall);
        getSmall = Math.min(getSmall, prices[i]);
    }
    return getLarge
};
