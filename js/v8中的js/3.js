let obj = {
    a : 1,
    b : {n : 2},
    c : 'cc',
    d : true,
    e : undefined,
    f : null,
    // g : function() {},
    // h : Symbol(1),
    i : 123n
}
// obj.a = obj.b
// obj.b.m = obj.a

// let newObj = JSON.parse(JSON.stringify(obj))
let newObj = structuredClone(obj)

console.log(newObj);