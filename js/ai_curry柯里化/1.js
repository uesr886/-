//add函数

function add(a, b) {
    //arguments是一个类（拟）数组对象
    // 对象?只要不是简单数据类型，就是对象 object
    console.log(Object.prototype.toString.call(arguments))
    // console.log(arguments.length);
    // for(var i=0; i<arguments.length; i++){
    //     console.log(arguments[i]);
    // }
    // console.log(arguments.reduce);报错
    //不过度设计 类数组，普通数组上的方法它没有
    // arguments.forEach(function(item){
    //     console.log(item);
    // });报错
    if(arguments.length<2){
        console.log('参数数量不足');
        return 
    }

    const items = Array.from(arguments);
    // console.log(Object.prototype.toString.call(items));
    return items.reduce((prev, cur) => prev + cur, 0)

    // let arr=[...arguments]
    // console.log(arr.reduce((a,b)=>a+b))
    return a + b;
}
console.log(add(1,2))