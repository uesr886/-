// var str = 'Hello world'
// console.log(str.length);

// var num = 123 

// var arr = [1, 2, 'a', true, {a: 1}]
// // arr.splice(2, 1)
// arr.splice(2, 0, '插队')
// // arr.push('hello')
// // arr.unshift('0')
// console.log(arr);

var arr = [1, 2, 3, 4]

for(var i = 0;i < arr.length; i++) {
    arr[i] = arr[i] * 10
}

console.log(arr);