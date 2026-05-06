// console.log("1. What is programming?"); 
// console.log("A) A way to design websites"); 
// console.log("B) The process of writing instructions to computers to execute"); 
// console.log("C) A type of hardware component"); 
// console.log("D) A method of connecting to the internet"); 
// var readline = require("readline"); 
// var rl = readline.createInterface({
//         input:process.stdin, 
//         output:process.stdout
// }); 
// rl.question("Choose a Option : ", function(answer){
//             switch(answer){
//                 case "a": 
//                 console.log("You choose wrong answer"); 
//                 break; 
//                 case "b": 
//                 console.log("You choose write answer"); 
//                 break;
//                 case "c": 
//                 console.log("You choose wrong wrong"); 
//                 break; 
//                 case "d": 
//                 console.log("You choose wrong wrong"); 
//                 break;   
//                 default: 
//                 console.log("Invalid answer"); 
//             }
// }); 



var p1 = prompt("1. What is programming? : " + "\n" + "A) A way to design websites \n" + "B) The process of writing instructions to computers to execute \n" + "C) A type of hardware component \n" + "D) A method of connecting to the internet"); 
var p2 = prompt("2. Which programming language is best for beginners? : " + "\n" + "A) Python \n" + "B) C++ \n" + "C) Assembly\n" + "D)JavaScript");
var p3 = prompt("3. What is the most widely used programming language for web development? : " + "\n" + "A) Java \n" + "B) Python \n" + "C) JavaScript\n" + "D)Ruby");  
var p4 = prompt("4. Which programming language is known for it's use in AI and ML? : " + "\n" + "A) Java \n" + "B) Python \n" + "C) C#\n" + "D)PHP"); 
var p5 = prompt("5. What is the oldest programming language still in use today ? : " + "\n" + "A) FORTRAN \n" + "B) COBOL \n" + "C) Python \n" + "D)Java"); 
var score = 0; 
        switch(p1){
                case "a": 
                console.log("You choose wrong answer"); 
                score--; 
                break; 
                case "b": 
                console.log("You choose right answer"); 
                score++; 
                break;
                case "c": 
                console.log("You choose wrong wrong"); 
                score--; 
                break; 
                case "d": 
                console.log("You choose wrong wrong"); 
                score--; 
                break;   
                default: 
                console.log("Invalid answer"); 
            }

             switch(p2){
                case "a": 
                console.log("You choose right answer"); 
                score++; 
                break; 
                case "b": 
                console.log("You choose wrong answer"); 
                score--; 
                break;
                case "c": 
                console.log("You choose wrong wrong"); 
                score--; 
                break; 
                case "d": 
                console.log("You choose wrong wrong"); 
                score--; 
                break;   
                default: 
                console.log("Invalid answer"); 
            }

             switch(p3){
                case "a": 
                console.log("You choose wrong answer"); 
                score--; 

                break; 
                case "b": 
                console.log("You choose wrong answer"); 
                score--; 

                break;
                case "c": 
                console.log("You choose right wrong"); 
                score++; 

                break; 
                case "d": 
                console.log("You choose wrong answer"); 
                score--; 

                break;   
                default: 
                console.log("Invalid answer"); 
            }

             switch(p4){
                case "a": 
                console.log("You choose wrong answer"); 
                score--; 

                break; 
                case "b": 
                console.log("You choose right answer"); 
                score++; 

                break;
                case "c": 
                console.log("You choose wrong answer"); 
                score--; 

                break; 
                case "d": 
                console.log("You choose wrong answer"); 
                score--; 

                break;   
                default: 
                console.log("Invalid answer"); 
            }

             switch(p5){
                case "a": 
                console.log("You choose right answer"); 
                score++; 

                break; 
                case "b": 
                console.log("You choose wrong answer"); 
                score--; 

                break;
                case "c": 
                console.log("You choose wrong answer"); 
                score--; 

                break; 
                case "d": 
                console.log("You choose wrong answer"); 
                score--; 

                break;   
                default: 
                console.log("Invalid answer"); 
            }


            console.log("Total question is 5"); 
            console.log("Your score is : " + score); 