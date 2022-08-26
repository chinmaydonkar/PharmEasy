const similarProductsObj = [
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/W71055/lama-laxmi-vilas-ras-nardiya-10-gm-2-1646377103.jpg",
        info: "Lama Laxmi Nivas Nardiya",
        desc:"10g Paste in Bottle",
        striked: "MRP 140",
        price: 77,
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/O93141/dabur-lavangadi-vati-40-2-1643262839.jpg",
        info: "Dabur Lavangadi",
        desc:"40 tablet(s) in Bottle",
        striked: "MRP 72",
        price: 48.24,
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/A84066/baidyanath-nagpur-swas-chintamani-ras-10-tablets-2-1654090426.jpg",
        info: "Baidyanath Nagpur Swas Chintamani",
        desc:"10 tablet(s) in Bottle",
        striked: "MRP 650",
        price: 500,
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/R89620/sri-sri-tattva-kabasura-kudineer-60-tabs-2-1654255963.jpg",
        info: "Sri Sri Tattva Kabasura Kudineer",
        desc:"60 tablet(s) in Bottle",
        striked: "MRP 130",
        price: 110,
    },
    {
        image: "https://cdn01.pharmeasy.in/dam/products_otc/D73069/bibo-rub-on-vapor-rub-10g-2-1641789210.jpg",
        info: "Bibo Rub-on Vapour",
        desc:"10g Balm in Bottle",
        striked: "MRP 86",
        price: 62,
    },
    // {
    //     image: "https://cdn01.pharmeasy.in/dam/products_otc/I00471/phytorelief-cc-sf-lozenge-10s-1-1641264039.jpg",
    //     info: "Phytorelief Cc Sf Lozenge 10's",
    //     desc:"10g Tablet(s) in Strip",
    //     striked: "MRP 297",
    //     price: 207.9,
    // },
    // {
    //     image: "https://cdn01.pharmeasy.in/dam/products_otc/D73069/bibo-rub-on-vapor-rub-10g-2-1641789210.jpg",
    //     info: "Lama Laxmi Nivas Nardiya",
    //     desc:"10g Paste in Bottle",
    //     striked: "MRP 140",
    //     price: 77,
    // },
    // {
    //     image: "https://cdn01.pharmeasy.in/dam/products_otc/D73069/bibo-rub-on-vapor-rub-10g-2-1641789210.jpg",
    //     info: "Lama Laxmi Nivas Nardiya",
    //     desc:"10g Paste in Bottle",
    //     striked: "MRP 140",
    //     price: 77,
    // },
]


let appendOne = document.querySelector('#similarProducts_1');

function displayData(data){
    data.forEach(function(ele){
        let divOne = document.createElement('div');
        
        let imageOne = document.createElement('img');
        imageOne.src = ele.image;
        imageOne.setAttribute("id","similarProdImage")
        let imageInfo = document.createElement('p');
        imageInfo.innerText = ele.info;
        imageInfo.setAttribute("id","aa");
        let imageDesc = document.createElement('p');
        imageDesc.innerText =ele.desc;
        imageDesc.setAttribute("id","bb");
        let striked = document.createElement('p');
        striked.setAttribute("id",'cc');
        striked.innerText =ele.striked;
        let price = document.createElement('p');
        price.innerText =ele.desc;
        price.setAttribute("id","dd");

        let anotherBtn = document.createElement('button');
        anotherBtn.innerText = "Add to Cart";
        anotherBtn.setAttribute("id","newBtn");

        divOne.append(imageOne,imageInfo,imageDesc,striked,price,anotherBtn);
        appendOne.append(divOne);
    })
}

displayData(similarProductsObj);

// ----------------------------------------------------------------------

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



