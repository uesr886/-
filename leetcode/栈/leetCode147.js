var MinStack = function () {
    this.stack = [];
    this.min = [];
};

MinStack.prototype.push = function (x) {
    if (!this.min.length || x <= this.min[this.min.length - 1]) {
        this.min.push(x)
    }
    this.stack.push(x);
};

MinStack.prototype.pop = function () {
    if (this.stack.pop() === this.min[this.min.length - 1]) {
        this.min.pop()
    }
};


MinStack.prototype.top = function () {
    if (!this.stack.length) return
    return this.stack[this.stack.length - 1]
};


MinStack.prototype.getMin = function () {
    return this.min[this.min.length - 1]
};
