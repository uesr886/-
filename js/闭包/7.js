var arr = [];
for (var i = 0; i <10; i++) {
     function foo(){
         let j=i
         arr[i] =function(){
             console.log(j);
         }
     }
     foo();

 }     

 arr.forEach(function(item){
     item()
 });