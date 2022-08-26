import navbar from "../components/navbar.js";

// console.log(navbar);

document.querySelector("#navbar1").innerHTML = navbar();

let dataBase = JSON.parse(localStorage.getItem("signUpDatabase"))|| "Hello,Login"
let userName;
if(dataBase == "Hello,Login"){
     userName = "Hello,Login"
}
else{
     userName = dataBase[0].name;
}
document.getElementById("user-details").innerText = userName