const products = [
    {Product : "1. Travel Adapter", Category : "Electronics", Price : "400-2000"}, 
    {Product : "2. Bluetooth Wireless Earphones", Category : "Electronics", Price : "800 - 5000"}, 

    {Product : "3. NutriPro Juicer Mixer Grinder", Category : "Home", Price : "1599 - 3000"}, 
    {Product : "4. Garbage Bags", Category : "Home", Price : "150 - 450"}, 

    
    {Product : "5. Portable Air Conditionar", Category : "Home", Price : "3099 - 6000"}, 
    {Product : "6. Laptop Backpack", Category : "Computer Accessories", Price : "150 - 450"}, 

    {Product : "7. Wireless Optical Mouse", Category : "Computer Accessories", Price : "300 - 1000"}, 
    {Product : "8. Smartwatch", Category : "Wearable Technologies", Price : "1500 - 2500"}, 

    {Product : "9. Perfume", Category : "Beauty & Fragrance", Price : "500 - 3000"}, 
    {Product : "10. Trolly Bags", Category : "Home", Price : "600 - 2000"}, 

]; 
function Electronics(){
     const electronics_Product = products.filter(product); 
    console.log(electronics_Product); 
    document.getElementById("demo").innerHTML = electronics_Product.map(p => `${p.Product} , ${p.Category} , ${p.Price}`).join('<br>'); 
    function product(productName){
        return productName.Category === "Electronics"; 
    }
}
function Home(){
    const home_Product = products.filter(product); 
    console.log(home_Product); 
    document.getElementById("demo").innerHTML = home_Product.map(p => `${p.Product}, ${p.Category}, ${p.Price}`).join("<br>"); 
    function product(productName){
        return productName.Category === "Home"; 
    }
}
function Computer(){
    const computer_Product = products.filter(product); 
    console.log(computer_Product); 
    document.getElementById("demo").innerHTML = computer_Product.map(p => `${p.Product}, ${p.Category}, ${p.Price}`).join("<br>"); 
    function product(productName){
        return productName.Category === "Computer Accessories"; 
    }
}
function Wearable(){
    const wearable_Product = products.filter(product); 
    console.log(wearable_Product); 
    document.getElementById("demo").innerHTML = wearable_Product.map(p => `${p.Product}, ${p.Category}, ${p.Price}`).join("<br>"); 
    function product(productName){
        return productName.Category === "Wearable Technologies"; 
    }
}
function Beauty(){
    const beauty_Product = products.filter(product); t
    console.log(beauty_Product); 
    document.getElementById("demo").innerHTML = beauty_Product.map(p => `${p.Product}, ${p.Category}, ${p.Price}`).join("<br>"); 
    function product(productName){
        return productName.Category === "Beauty & Fragrance"; 
    }
}