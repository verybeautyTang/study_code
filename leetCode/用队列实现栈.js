var MyStack = function() {
    this.queue = []
    this.helpQueue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.helpQueue.push(x)
    while(this.queue.length !== 0) {
        this.helpQueue.push(this.queue.shift())
    }
    while(this.helpQueue.length !== 0) {
        this.queue.push(this.helpQueue.shift())
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(this.queue.length !== 0) {
        return this.queue.shift()
    }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
   if(this.queue.length !== 0) {
        return this.queue[0]
    }
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
