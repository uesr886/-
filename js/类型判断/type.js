function type(x) {
    let res = Object.prototype.toString.call(x)
    return res.slice(8, -1) // '[object String]'
}

console.log(type('hello'));  // String
console.log(type(123));  // Number
console.log(type([]));  // Array