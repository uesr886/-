// const arr = [1, 2, 3, 4]
// const arr = new Array(7).fill(0)

// console.log(arr.length);

// const arr = [1, 2, 3, 4, 0]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 2) {
//         return 
//         // continue
//         // break
//     }
//     console.log(arr[i]);
// }
// console.log('Hello world!');
// arr.forEach(function(item, index, arr) {
//     if (item > 2) {
//         return
//     }
//     console.log(item, index, arr);
// })

// const newArr = arr.map(function(item, index, arr) {
//     return item * 2
// })
// console.log(newArr, arr);

const arr = [
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [11, 22, 33, 44],
    [100, 200, 300, 400],
]

for (let i = 0; i < arr.length; i++) {  // O(n^2)
    let item = arr[i]
    for (let j = 0; j < arr[i].length; j++) {
        item[j] = item[j] + ''
    }
}