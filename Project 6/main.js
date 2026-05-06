function myFunction(){
var message = document.getElementById("message").value; 
var count = 0; 
for(var i = 0; i < message.length; i++){
    if(message[i] !== " "){
           count++; 
           console.log(count); 
           document.getElementById("count").innerHTML = `Count: ${count}`
           ; 
        }
    }
}

// var message = "Hello world hi"; 
// var count = 0; 
// for(var i = 0; i < message.length; i++){
//     if(message[i] !== " "){
//         console.log(count++); 
//     }
// }