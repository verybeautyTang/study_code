/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let data = []
    for(let i = 1 ; i<= n; i++) {
        if(i%3 === 0 && i %5 !== 0) {
            data.push("Fizz")
        } else if(i%3 !== 0 && i %5 === 0) {
            data.push("Buzz")
        } else if(i%3 === 0 && i %5 === 0) {
            data.push("FizzBuzz")
        } else {
            data.push(i.toString())
        }
    }
    return data
};
