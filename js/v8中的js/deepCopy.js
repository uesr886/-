let obj = {
    a : 1,
    b : {n : 2}
}

function deepCopy(obj) {
    let newObj = {}
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                // obj[key] 是不是对象  typeof obj[key] === 'object' && obj[]
                if (obj[key] instanceof Object) {
                    let xx = deepCopy(obj[key])
                    newObj[key] = xx
                } else {
                    newObj[key] = obj[key]
                }
                // newObj[key] = obj[key]
            }
        }
        return newObj
        
    }

    


console.log(deepCopy(obj));