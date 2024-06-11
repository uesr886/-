if ({}) {
  console.log('ok');
}


// 1. ToNumber({})
// 2. let primValue = ToPrimitive({}, Number)

// console.log(Number({}));

// '[object Object]'
// ToNumber('[object Object]')



// console.log(Number([]));
// ToNumber([])
// ToPrimitive([], Number)  // ''
// ToNumber('')
// 0





// console.log(String({}));
// ToString({})
// ToPrimitive({}, String)   // "[object Object]"
// ToString("[object Object]")  // "[object Object]"
