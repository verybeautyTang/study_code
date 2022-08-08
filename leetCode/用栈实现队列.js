var MyQueue = function() {
    this.stack = []
    this.helpStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {//push的时候加入输入栈
   this.helpStack.push(x);
};

MyQueue.prototype.pop = function() {
    //push的时候判断输出栈是否为空
   if(this.stack.length > 0 ) {
       //不为空则输出栈出栈
       return this.stack.pop();
   }
     //输出栈为空，则把输入栈所有的元素加入输出栈
   while(this.helpStack.length) {
       this.stack.push(this.helpStack.pop());
   }
   return this.stack.pop();
};

MyQueue.prototype.peek = function() {
   const x = this.pop();//查看队头的元素 复用pop方法，然后在让元素push进输出栈
   this.stack.push(x);
   return x;
};

MyQueue.prototype.empty = function() {
   return !this.helpStack.length && !this.stack.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
