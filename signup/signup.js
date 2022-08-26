 
function Click(sign){
    let SignUp,Login;
    let headsignin = document.querySelector(".user-sign-in")
    let headcreateaccount = document.querySelector(".user-create-account")

    if(sign=='signIn'){
        Login = document.querySelector(".login")
        Login.style.display="block";
        SignUp = document.querySelector(".signup")
        SignUp.style.display="none"
        
        headsignin.style.borderBottom= "3px solid #10847E";
        headcreateaccount.style.borderBottom="none";
        
    } else{
        Login = document.querySelector(".login");
        Login.style.display="none"; 
        SignUp = document.querySelector(".signup");
        SignUp.style.display="block";
        
        headcreateaccount.style.borderBottom= "3px solid #10847E";
        headsignin.style.borderBottom="none";
    }
// console.log(sign)
 }

 document.getElementById("check-btn-2").addEventListener("click",signUp);
 

 function signUp(){
     var arr = JSON.parse(localStorage.getItem("signUpDatabase")) || [];
     var name = document.querySelector("#user-sign-input-1").value;
     var lastName = document.querySelector("#user-sign-input-2").value;
     var email = document.querySelector("#user-signup-input-1").value;
     var password = document.querySelector("#user-signup-input-2").value;

     console.log(name,email,password);
     var signUpObj = {
         name :name,       
         email: email,
         password: password
     };
     arr.push(signUpObj);
    //  console.log(arr);
     
     localStorage.setItem("signUpDatabase",JSON.stringify(arr));
    //  window.location.href ="signup.html"
    var pass = document.querySelector("#user-signup-input-3").value;
      
         if(password !== pass || email === "" || name === "" || lastName === ""){
             alert("Fill all the correct details!");
         }
            else{
        alert("login successfully")
        //  window.location.href="/"
        let SignUp,Login;
        let headsignin = document.querySelector(".user-sign-in")
        let headcreateaccount = document.querySelector(".user-create-account")

        Login = document.querySelector(".login")
        Login.style.display="block";
        SignUp = document.querySelector(".signup")
        SignUp.style.display="none"
        
        headsignin.style.borderBottom= "3px solid #10847E";
        headcreateaccount.style.borderBottom="none";
     }
 }

 document.querySelector("#check-btn-1").addEventListener("click",signIn);
 
 // console.log(dataBase)
 function signIn(){
     
    let dataBase = JSON.parse(localStorage.getItem("signUpDatabase"));
     var email = document.querySelector("#user-input-1").value;
     var pass = document.querySelector("#user-input-2").value;
       var flag=0;
       console.log(dataBase);
       console.log(pass);
     for(var i=0;i<dataBase.length;i++){
         if(dataBase[i].email == email && dataBase[i].password == pass){
             flag=1;
             break;
         }

     };
     if(flag==1){
        alert("login successfully")
         window.location.href="/"
         //home page
     }
     else {
         alert("Wrong Credentials");
     }
 }