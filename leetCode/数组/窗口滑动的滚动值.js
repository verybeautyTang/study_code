/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.getCountNumber = size;
    this.sizeNum = []
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if(this.sizeNum.length === this.getCountNumber) {
        this.sizeNum.shift();
    }
    this.sizeNum.push(val);
    let count = this.sizeNum.reduce((a,b) => a + b )
    if(this.sizeNum.length < this.getCountNumber) {
        return count / this.sizeNum.length
    }else {
        return count / this.getCountNumber;
    }
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
