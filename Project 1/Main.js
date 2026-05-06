var readline = require("readline"); 
var rl = readline.createInterface({
    input:process.stdin, 
    output:process.stdout
}); 
console.log("--- Calculator ---"); 
rl.question("Enter your 1st number : ", function(num1){
    rl.question("Enter your 2nd number : ", function(num2){
        var x = parseInt(num1); 
        var y = parseInt(num2);
        console.log("--- Results ---"); 
        console.log("Addition(+) : "+ (x + y)); 
        console.log("Subtraction(-) : " + (x - y)); 
        console.log("Multiplication(*) : " + (x * y)); 
        console.log("Division(/) : " + (x / y)); 
    });
}); 

