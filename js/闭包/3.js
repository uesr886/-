function bar() {
    var myname = 'Tom'
    let test1 = 100
    if (1) {
        let myname = 'Jerry'
        console.log(test, myname);
    }
}
function foo() {
    var myname = '彭于晏'
    let test = 2
    {
        let test = 3
        bar()
    }
}
var myname = '吴彦祖'
let test = 1
foo()