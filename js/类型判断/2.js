// let a = 1
// let b = {num: 2}


let str = 'hello'
let num = 123
let flag = false
let un = undefined
let nu = null

let obj = {}
let arr = []
let fn = function() {}
let date = new Date()

// console.log(str instanceof String);// false
// console.log(num instanceof Number);// false
// console.log(flag instanceof Boolean);// false

// console.log(un instanceof undefined);
// console.log(nu instanceof null);

// console.log(obj instanceof Object);// true
// console.log(arr instanceof Array);// true
// console.log(fn instanceof Function)// true

console.log(arr instanceof Array)// true
console.log(arr instanceof Object)// true

var array = []  // new Array()

// array.__proto__ = Array.prototype

// Array.prototype.__proto__ = Object.prototype