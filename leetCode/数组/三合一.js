/**
 * @param {number} stackSize
 */
var TripleInOne = function(stackSize) {
    this.arr = new Array(stackSize * 3)
    this.index = [-1, stackSize - 1, 2 * stackSize - 1]
    this.emptyIndex = [-1, stackSize - 1, 2 * stackSize - 1]
    this.fullIndex = [stackSize - 1, 2 * stackSize - 1, 3 * stackSize - 1]
};

/** 
 * @param {number} stackNum 
 * @param {number} value
 * @return {void}
 */
TripleInOne.prototype.push = function(stackNum, value) {
    if (this.index[stackNum] === this.fullIndex[stackNum]) {
        return null
    }
    this.index[stackNum]++
    this.arr[this.index[stackNum]] = value
    return null
};

/** 
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.pop = function(stackNum) {
    if (this.index[stackNum] === this.emptyIndex[stackNum]) {
        return -1
    }
    const val = this.arr[this.index[stackNum]]
    this.index[stackNum]--
    return val
};

/** 
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.peek = function(stackNum) {
    if (this.index[stackNum] === this.emptyIndex[stackNum]) {
        return -1
    }
    return this.arr[this.index[stackNum]]
};

/** 
 * @param {number} stackNum
 * @return {boolean}
 */
TripleInOne.prototype.isEmpty = function(stackNum) {
    return this.index[stackNum] === this.emptyIndex[stackNum]
};
/**
 * Your TripleInOne object will be instantiated and called as such:
 * var obj = new TripleInOne(stackSize)
 * obj.push(stackNum,value)
 * var param_2 = obj.pop(stackNum)
 * var param_3 = obj.peek(stackNum)
 * var param_4 = obj.isEmpty(stackNum)
 */
