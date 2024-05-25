var arr=[];
// for (var i = 0; i <10; i++) {
//     arr[i] =function(){
//         console.log(i);
//     }
    
// }       //在函数调用前一刻才会去声明函数
// for (let i = 0; i <10; i++) {
//     arr[i] =function(){
//         console.log(i);
//     }

// }     //let+{}块级作用域

// arr.forEach(function(item){
//     item()
// });

// for (var i = 0; i <10; i++) {
//     function foo(){
//         var j=i
//         arr[i] =function(){
//             console.log(j);
//         }
//     }
//     foo();

// }     //let+{}块级作用域

// arr.forEach(function(item){
//     item()
// });
for (var i = 0; i <10; i++) {
    (function (j){
        arr[j] =function(){
            console.log(j);
        }
    }
   )(i);

}     //let+{}块级作用域

arr.forEach(function(item){
    item()
});