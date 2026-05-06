function generateColor(){
    let hexcode = "0123456789ABCDEF";
    let colorCode = "#"; 
    for(let i = 0; i < 6; i++){
        colorCode += hexcode[Math.floor(Math.random() * 16)]; 
    }
    document.getElementById("color").value = colorCode; 
    document.querySelector(".child-container").style.backgroundColor = colorCode;
}