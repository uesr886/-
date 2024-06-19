// const arr = [1, 2, 3]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// const [a, b, c] = arr
// console.log(a, b, c);  // 输出 1 2 3

// const arr = [1, 2, {a:3}]
// const [a, b, c] = arr
// console.log(a, b, c); // 输出 1 2 {a: 3}

// const arr = [1, 2, {a:3}]
// const [a, b, {a:c}] = arr
// console.log(a, b, c); // 输出 1 2 {a: 3}

// const obj = {a:1, b:2, c:3}
// const {a, b, c} = obj // const {a: a, b: b, c: c} = obj
// console.log(a, b, c); // 输出 1 2 3

// const obj = {a:1, b:2, c:3, d: {n: 4}}
// const {a, b, c, d: {n}} = obj // const {a: a, b: b, c: c} = obj
// console.log(a, b, c, n); // 输出 1 2 3

// const arr = [1, 2, 3]
// console.log(...arr); // rest

// const [a, b, c, d, e] = 'hello'
// console.log(a, b, c, d, e);

// function foo(a, ...args) {
//     // console.log(arguments);
//     console.log(args); // 输出2, 3
// }
// foo(1, 2, 3)

// foo.call(obj, 1, 2)

function foo([a, b]) {
    console.log(a, b);
}
foo([1, 2])