function foo() {
    var a = 1
    function bar() {
        console.log(a);
    }
    // return bar
    window.fn = bar
}
// var baz = foo()
// baz()
foo()
window.fn()