// var cart =JSON.parse(localStorage.getItem("cartData")) || [];
// // console.log(cart)
//     for(i=0; i<cart.length; i++){
   
  
//     var nums= document.getElementById("itemnums");
//     nums.innerText= cart.length ;

//     var products = document.createElement("div")
//     products.setAttribute("id","products");

//     var dimg = document.createElement("div");

//      var img = document.createElement("img");
//      img.setAttribute("src",cart[i].img)
//     //  img.src= cart[i].imgs1;
//     dimg.append(img)
//      var pdetails = document.createElement("div")
//     pdetails.setAttribute("class","pdetails");

//      var pname = document.createElement("h3");
//      pname.setAttribute("class","pname");
//      pname.innerText=cart[i].name;

     
//      var p = document.createElement("div");
     
//      p.setAttribute("class","dp")
//      p.append(pdetails);
    
//      var quant = document.createElement("div")
//      quant.innerHTML= "<select> <option>Qty 1</option> <option>Qty 2</option><option>Qty 3</option><option>Qty 4</option><option>Qty 5</option> </select>"
//     quant.setAttribute("class","quant");



   
//      var price = document.createElement("h3");
//      price.setAttribute("class","price");
//      price.innerText="₹"+cart[i].price;

//      var date = document.createElement("h3");
//      date.setAttribute("class","date");
//      date.innerText= "Delivery 27 Feb - 28Feb"

//      var dis = document.createElement("h5");
//      dis.setAttribute("class","dis");
//      dis.innerText= cart[i].dis+"%"+"OFF";

//      var disprice = document.createElement("div");
//      disprice.setAttribute("class","disprice");
//     disprice.append(dis,price)
//     var qdiv= document.createElement("div");
//     qdiv.setAttribute("class","pdiv")
//     qdiv.append(quant,disprice)
//      pdetails.append(pname,qdiv,date)
//     products.append(dimg,p);
//     list.append(products );
//     }



//     var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

// document.getElementById("delivery").addEventListener("click", function(){
//   window.location.href= "payment.html"
// })



// //     onscroll function  //////////////////////////////////////////////////////
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
// if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.querySelector(".navbar").style.height = "80px";
//     document.querySelector(".overflowbar").style.visibility = "hidden"
//     // console.log(document.querySelector(".overflowbar").innerHTML)
// } else {
//     document.querySelector(".navbar").style.height = "123px";
//     document.querySelector(".overflowbar").style.visibility = "visible"
// }
// }