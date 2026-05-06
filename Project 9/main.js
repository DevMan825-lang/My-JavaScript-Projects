function myFunction_1(){
    let num = parseInt(document.getElementById("number").value); 
    document.getElementById("demo").innerHTML = "Decimal To Binary : " + num.toString(2); 
}
function myFunction_2(){
    let num = parseInt(document.getElementById("number").value); 
    document.getElementById("demo").innerHTML = "Decimal To Octal : " + num.toString(8); 
}
function myFunction_3(){
    let num = parseInt(document.getElementById("number").value); 
    document.getElementById("demo").innerHTML = "Decimal To Hexadecimal : " + num.toString(16); 
}

