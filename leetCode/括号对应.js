/**
 * @param {string} s
 * @return {boolean}
 * 选取栈的方式，只针对前面的括号进行操作，这里会有问题，就是它本身如果只有后面的话，没有做数据兼容。
 */
var isValid = function(s) {
let stack = []
const keys = {
    '(': ')',
    '{':'}',
    '[':']',
}
for(let i = 0; i< s.length; i++) {
    if(Object.keys(keys).includes(s[i])) {
        stack.push(s[i])
        } else {
            if(keys[stack[stack.length -1]] === s[i]) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    if(stack.length === 0) return true
    return false
}
