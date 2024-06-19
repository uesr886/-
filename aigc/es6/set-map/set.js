// const set = new Set();
// set.add(1)
// set.add(2)
// set.delete(1)
// console.log(set.has(2));
// console.log(set.size);
// console.log(set); // Set(2) { 1, 2 }

const arr = [1, 1, 2, 2, 3, 3]
const set = new Set(arr);
console.log(set);
// console.log(Array.from(set)); // [1, 2, 3 ]
console.log([...set]); // [1, 2, 3 ]