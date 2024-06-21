const items=[1,2,3]

//es6的可读性
// for(let item of items) {
//     sum+=item
// }

const sum=items.reduce( (accumulator, currentValue) => accumulator + currentValue,0)

console.log(sum);
