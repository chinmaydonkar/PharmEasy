//update priceBlock-container

updatePriceblock();
function updatePriceblock() {
   let mrp = JSON.parse(localStorage.getItem("MRP")) || [];
   
   let z = document.getElementById("priceDetail-value actual-price");
   z.innerText = `₹ 3,560 ${mrp}`;
   let discount = JSON.parse(localStorage.getItem("discount")) || [];
   let x = document.getElementById("priceDetail-value discount-price teal-1");
   x.innerText = `₹ 550${discount}`;
   let orderData = JSON.parse(localStorage.getItem("amount")) || [];
   if(orderData < 300 ){
      orderData.innerHTML = "300"
   }else{
      orderData.innerText = `₹ ${orderData}`
   }
 
   let y = document.getElementById("priceDetail-total");
   y.innerText = `₹ 3010 ${orderData}`

  
}


document.querySelector("form").addEventListener("submit", addfun);
let formdata = document.querySelector("form");
let addArr = JSON.parse(localStorage.getItem("addDetails")) || [];
function addfun(event) {
   event.preventDefault();
   let obj = {
      name: formdata.name.value,
      mobile: formdata.mobile.value,
      pin: formdata.pin.value,
      address: formdata.address.value,
      locality: formdata.locality.value,
      // city: formdata.city.value,
      state: formdata.state.value,
   };
   localStorage.setItem("addDetails", JSON.stringify(obj));
   window.location.href = "Cart.html";
   alert("Order Succesfull")
};