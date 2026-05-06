// var text = document.getElementById("text").value; 
// var text = "Hello";
// var check = text.split("").reverse().join(""); 
// console.log(check); 
// if(text == check){
//     console.log("It is a 'Palindrome' ");
// }
// else{
//     console.log("Not a 'Palindrome' ");
// }

function check(){
var text = document.getElementById("text").value;
var check = text.split("").reverse().join(""); 
console.log(check); 
if(text == check){
    alert("It is a 'Palindrome' ");
    document.getElementById("demo").innerHTML = `${text}` + " " + "It is a Palindrome"; 
}
else{
    alert("Not a 'Palindrome' ");
    document.getElementById("demo").innerHTML = `${text}` + " " + "Not a Palindrome"; 
}
}
function cancel(){
    location.reload(); 
}