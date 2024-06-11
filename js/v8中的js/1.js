var myname = '夏总'
function showName() {
    var mynmae = '袁总'
    function foo() {
        console.log(this.myname);
    }
    foo()
}
showName()