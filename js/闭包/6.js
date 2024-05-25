// var count = 0
function add(){
        var count = 0
        function foo(){
            count++
            return count
        }
        return foo
    }
    bar=add()
    console.log(bar());//1
    console.log(bar());//2
    console.log(bar());//3