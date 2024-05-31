function Duck () {

}
//函数表达式
// js 变量类型由值决定

var Singleton = function(name) {
    this.name = name
}

var obj1 = new Singleton('周杰伦')
var obj2 = new Singleton('周杰伦')
console.log(obj1.name == obj2.name)

var obj = {'a': 1}
var obj3 = {'a': 1}
var obj4 = obj
console.log(obj == obj4);