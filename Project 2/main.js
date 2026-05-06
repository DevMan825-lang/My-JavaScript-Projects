var number = 0; 
function myFunction_1(){
    number += 1; 
   // number = number + 1; 
   document.getElementById("demo").innerHTML = number;
   console.log(number); 
}


function myFunction_2(){
    number -= 1; 
   // number = number - 1; 
    document.getElementById("demo").innerHTML = number;
    if(number == 0){
     document.getElementById("mybtn").disabled = true;
     console.log(number); 

}
}