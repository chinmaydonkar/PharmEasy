updatePriceblock();
function updatePriceblock() {
   let mrp = JSON.parse(localStorage.getItem("MRP")) || [];
   
   let z = document.getElementById("priceDetail-value actual-price");
   z.innerText = `₹ ${mrp}`;
   let discount = JSON.parse(localStorage.getItem("discount")) || [];
   let x = document.getElementById("priceDetail-value discount-price teal-1");
   x.innerText = `₹ ${discount}`;
   let orderData = JSON.parse(localStorage.getItem("amount")) || [];
   if(orderData < 300 ){
      orderData.innerHTML = "300"
   }else{
      orderData.innerText = `₹ ${orderData}`
   }
 
   let y = document.getElementById("priceDetail-total");
   y.innerText = `₹ ${orderData}`

   // let total = document.getElementById("priceDetail-total");
   // total.innerText = 
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
};