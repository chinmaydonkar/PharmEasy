var cart = JSON.parse(localStorage.getItem("cart")) || [] ;





let itemcount = cart.length;
    document.querySelector(".wishcount").innerText = ` ${itemcount} `

displayProducts(cart)


function displayProducts(DataDisplayed) {

    productss.innerHTML=null;

DataDisplayed.forEach(function(elem,index){

    var maincard=document.createElement("div");
    maincard.setAttribute("id" ,"maindata")

    var card=document.createElement("div");
    card.setAttribute("id" ,"data")

       var productVisual = document.createElement("img");
        productVisual.setAttribute("id","prodImage");
        productVisual.src = elem.image_url;

        var cardqty=document.createElement("div");
    cardqty.setAttribute("id" ,"dataqty")

    
    var qtybtn = document.createElement("button");
        qtybtn.setAttribute("id", "btn");

        var innerDiv = document.createElement("div");
        innerDiv.setAttribute("id", "innerDiv");

        var btnTextDiv = document.createElement("div");
        btnTextDiv.setAttribute("id", "btnTextDiv");
        btnTextDiv.innerText = "Qty";

        var dropdownDiv = document.createElement("div");
        dropdownDiv.setAttribute("id", "dropdownDiv");

        var btnSelect = document.createElement("select");
        btnSelect.setAttribute("id", "btnSelect");

        for (var i = 1; i < 5; i++) {
            var btnOption = document.createElement("option");
            btnOption.setAttribute("value", i);
            var t = document.createTextNode(i);
            btnOption.appendChild(t);
            btnSelect.append(btnOption);
        }

        btnSelect.addEventListener("change", function () {
            item.qty = btnSelect.value;

            localStorage.setItem("cart", JSON.stringify(cart));
            //dropdownDiv.value = item.qty;
            displayProducts(cart);

        })

        dropdownDiv.append(btnSelect);
        innerDiv.append(btnTextDiv, dropdownDiv);
        qtybtn.append(innerDiv);


    var card1=document.createElement("div");
       card1.setAttribute("id" ,"data1")


        var productDesc = document.createElement("p");
        productDesc.setAttribute("id","prodDesc");
        productDesc.innerText = elem.info;

     var card3=document.createElement("div");
    card3.setAttribute("id" ,"data3")

        var productAmount = document.createElement("p");
        productAmount.setAttribute("id","prodAmt");
        productAmount.innerText = elem.price;

        // var priceDiv = document.createElement('div');
        // priceDiv.setAttribute("id","priceDiv");

        var strikedPrice = document.createElement('s');
        strikedPrice.innerText = elem.cut;

        var discountPrice = document.createElement('span');
        discountPrice.innerText = elem.dis;

        // var expressdly = document.createElement("div");
        // expressdly.setAttribute("id", "expressdly");
        // expressdly.innerHTML = "Express Delivery <span>Today, before 8 pm</span>";

    var card2=document.createElement("div");
    card2.setAttribute("id" ,"data2")

    var button=document.createElement("button");
    button.setAttribute("class","bt")
    button.innerText="Delete"
    button.style.color="white";
    button.style.backgroundColor="red"
    button.style.width="50px"
    button.style.height="20px"
   button.style.borderRadius="5px"
   button.style.marginBottom="13px"
   button.style.border="none"
    button.style.cursor="pointer"
    button.addEventListener("click",function(){
        deleteItem(elem,index);
    })



        
    card.append(productVisual);
    cardqty.append(qtybtn);
    card1.append(productDesc);
    card3.append(productAmount, strikedPrice,discountPrice);
    card2.append(button);
    maincard.append(card,cardqty,card1,card3,card2)

        document.querySelector("#productss").append(maincard);
        console.log(maincard)
    });

}



function  deleteItem(elem,index){
     cart.splice(index,1);
        localStorage.setItem("cart",JSON.stringify(cart));
      window.location.reload();
 }




    function payment(){
        window.location.href="payment.html"
    }

    // var total =cart.reduce(function (acc,cv){
    //     return acc+Number(cv.price)
    // },0)
    // console.log(total)
    // document.querySelector("#totalMRP").innerHTML=` ${total}`
    // document.querySelector("#totalamount").innerHTML=` ${total}`

   
    var total = cart.reduce(function (acc, cv) {
    return acc + Number(cv.price);
  }, 0);
  console.log("total:", total);

  var totalMRP = cart.reduce(function (acc, cv) {
    return acc + Number(cv.cut);
  }, 0);
  console.log("totalMRP:", totalMRP);
  document.getElementById("totalMRP").innerHTML = `₹${total}`;

  document.getElementById("discountMRP").innerHTML = `-₹${ total - totalMRP }`;

  document.getElementById("totalamount2").innerHTML = `₹${totalMRP}`;
  

    
   