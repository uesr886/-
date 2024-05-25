// function app() {
//     console.log(b);
// }
function bar () {
    console.log(a);
    // var b = 100
}
function foo() {
    var a = 100
    bar()
}
var a = 200
// var b = 200
foo()
// app()