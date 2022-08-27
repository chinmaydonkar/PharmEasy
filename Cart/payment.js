// document.getElementsByClassName("linkwallet").addEventListener("click",function(){
//     window.location.href = "succesfull.html"
// })

var cart = JSON.parse(localStorage.getItem("cart")) || [] ;

displayProducts(cart)

var total = cart.reduce(function (acc, cv) {
    return acc + Number(cv.price);
  }, 0);
  console.log("total:", total);

  var totalMRP = cart.reduce(function (acc, cv) {
    return acc + Number(cv.cut);
  }, 0);
  console.log("totalMRP:", totalMRP);
  document.getElementById("totalMRP").innerHTML = `₹10500${total}`;

  document.getElementById("discountMRP").innerHTML = `-₹$570{totalMRP - total}`;

  document.getElementById("totalamount2").innerHTML = `₹$9930{totalMRP}`;
  
