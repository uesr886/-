// let str = 'hello'
// let flag = false
// let num = 123
// let u = undefined
// let n = null


// let big = 1234n  // bigInt
// let s = Symbol('1') // 定义一个独一无二的值
// let s2 = Symbol('1')
// console.log(s == s2); // false

// let a = '1'
// let b = '1'
// console.log(a === b);

var abc = 234

function foo(cb) {
    var abc = 123
    cb()
}


foo(fn);