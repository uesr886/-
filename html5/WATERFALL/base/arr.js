var arr = [1, 2, 3, 4, 5, 6]

var i = arr.includes(0)

// arr.forEach(function(item, index, arr) {    //回调函数
//     console.log(item, index, arr);
// })
arr.map(function(item, index, arr) {
    return item * 10
})
console.log(i);