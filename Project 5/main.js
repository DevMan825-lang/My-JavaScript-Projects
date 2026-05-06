function check(){
var age = parseInt(document.getElementById("age").value); 
var isCitizen = document.getElementById("citizenIn").value; 
var isRegistered = document.getElementById("registeredIn").value; 
var message = document.querySelector("h3"); 
   if(age >= 18 && isCitizen == "Yes" && isRegistered == "Yes"){
                alert("You are eligible to vote"); 
                message.innerHTML = "You are eligible to vote"; 
                message.style.color = "#5de75d"; 
   } 
   else if(age < 18 && isCitizen != "Yes" && isRegistered != "Yes"){
                alert("You are not eligible to vote"); 
                message.innerHTML = "You are not eligible to vote"; 
                message.style.color = "red"; 
   } 
   else if(age >= 18 && isCitizen != "Yes" && isRegistered == "Yes"){
                alert("You are not eligible to vote"); 
                message.innerHTML = "You are not eligible to vote"; 
                message.style.color = "red"; 

   } 
   else if(age >= 18 && isCitizen == "Yes" && isRegistered != "Yes"){
                alert("You are not eligible to vote"); 
                message.innerHTML = "You are not eligible to vote"; 
                message.style.color = "red"; 

   } 
   else{
                alert("Invalid details"); 
                message.innerHTML = "Invalid details"; 
                message.style.color = "red"; 

   }
}