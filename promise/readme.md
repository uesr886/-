# 异步
1. 需要耗时执行的代码

# 回调
回调地狱：嵌套过深，一旦出现问题，很难排查，维护难度太大

# promise

# .then
是Promise原型上的一个函数，X.then() then函数会在x这个promise实例对象状态变更为resolved之后才执行内部逻辑，由此借助这个机制可以将异步捋成同步

then方法支持链式调用，因为then默认也会返回一个promise对象，但是状态默认是pending，这就会导致后面的then用不上前面then的状态，从而继续往前查找

我们在then中返回一个promise对象，会覆盖掉then自带的返回


resolve(x) 这个x会指定交给then中的回调函数
reject(x) 这个x会指定交给catch中的回调函数，catch是专门用来捕获程序中的错误的