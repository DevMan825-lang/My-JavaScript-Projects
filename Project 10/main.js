function myFunction(){
    let inputBox = parseInt(document.getElementById("password").value); 
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()"; 
    let pass = " "; 
    for(let i = 0; i < inputBox; i++){
       pass += char[Math.floor(Math.random () * char.length)]; 
    }

    if(document.getElementById("password").value.length === 0){
        alert("Enter your length of the password"); 
        document.getElementById("demo").innerHTML = "Enter your length of the password"; 
    } else {                                                                           
            alert("Your Password is : " + pass); 
            document.getElementById("demo").innerHTML = "Your Password is : " + pass; 
    }
}   