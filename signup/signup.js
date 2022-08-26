 
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
//console.log(sign)
 }

 document.querySelector(".signup").addEventListener("submit",signUp);
 var arr = JSON.parse(localStorage.getItem("signUpDatabase")) || [];

 function signUp(event){
     event.preventDefault();
     var name = document.querySelector("#user-sign-input").value;
    //  console.log(name);
     var email = document.querySelector(".user-email").value;
     var password = document.querySelector(".user-pass").value;

     // console.log(name,mobile,email,password);
     var signUpObj = {
         email: email,
         password: password
     };
     arr.push(signUpObj);
    //  console.log(arr);
     
     localStorage.setItem("signUpDatabase",JSON.stringify(arr));
     window.location.href ="signup.html"

 }

 document.querySelector(".login").addEventListener("submit",signIn);
 var dataBase = JSON.parse(localStorage.getItem("signUpDatabase"));
 // console.log(dataBase)
 function signIn(event){
     
     event.preventDefault()
     var email = document.querySelector(".user-login-email").value;
     var pass = document.querySelector(".user-login-pass").value;
       var flag=0;
     for(var i=0;i<dataBase.length;i++){
         if(dataBase[i].email == email && dataBase[i].password == pass){
             flag=1;
             break;
         }

     };
     if(flag==1){
        alert("login successfully")
         window.location.href="/"
     }
     else if(flag==0){
         alert("Wrong Credentials");
     }
 }