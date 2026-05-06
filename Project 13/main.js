function celsiusToFarenheit(celsius){
     return ((celsius * 9/5) + 32); 
}
function farenheitToCelsius(farenheit){
     return ((farenheit - 32) * 5 / 9); 
}
document.getElementById("click").onclick = function(){
        let c = parseFloat(document.getElementById("num-1").value);
        let conversion_1 = celsiusToFarenheit(c); 
        document.getElementById("num-2").value = `${conversion_1.toFixed(2)} F`; 

        let f = parseFloat(document.getElementById("num-3").value);
        let conversion_2 = farenheitToCelsius(f); 
        document.getElementById("num-4").value = `${conversion_2.toFixed(2)} C`; 
}


// console.log("Celsius To Farenheit Convesion : " +