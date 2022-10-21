/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // let res = [];
    // for(let i=0; i<temperatures.length; i++) {
    //     let temp = temperatures.findIndex((j,index) =>  j > temperatures[i] && index > i);
    //     if(temp >= 0) {
    //         res.push(temp - i)
    //     } else {
    //         res.push(0)
    //     }
    // }
    // return res;
     //栈
    let n = temperatures.length;
    let answer = new Array(n).fill(0);//初始化，假设后续都没出现过更高气温
    let stack = [];
    for(let i = 0; i < n; i++) {//遍历数组确定answer[i]
        while(stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {//栈中有元素，且前几天有比当前温度低的情况
            let preIndex = stack.pop();//已经找到比第preIndex天温度高的是哪天了，answer[preIndex]已经确定了，把preIndex从栈里pop出来
            answer[preIndex] = i - preIndex;//记录第preIndex天后出现高温距preIndex有多少天
        }
        stack.push(i);//answer[i]还不知道，先把i压进栈
    }
    return answer;
};
