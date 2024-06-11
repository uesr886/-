function shallowCopy(obj) {
    let newObj = {};
    for (let key in obj) {
        // key 是不是obj显示具有的
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

let obj = {
    a: 1,
    b: { n: 2 }
}

console.log(shallowCopy(obj));