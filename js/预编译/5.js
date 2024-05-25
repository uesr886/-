global = 100
function fn() {
  console.log(global);// undefined
  global = 200
  console.log(global);// 200
  var global = 300
}
fn()

console.log(global);// 300
global;