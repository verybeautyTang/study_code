/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function(guess, answer) {
    let data = 0;
    for(let i = 0; i< answer.length; i++) {
        if(guess[i] === answer[i]) {
            data += 1
        }
    }
    return data;
};
