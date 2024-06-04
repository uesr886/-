Person.prototype.like = '听歌'
function Person() {
    this.name = '田总'
}
let p = new Person()
p.like = '撸铁'
// delete p.like

console.log(p.like);

function Car() {
    this.name = 'su7'
}
let car = new Car()
console.log(car.Constructor);
// 实例对象通过constructor来记录我是由谁创建的