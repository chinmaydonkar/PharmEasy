let images=[
    "https://consumer-app-images.pharmeasy.in/marketing/comp_3step.jpg",
    "https://consumer-app-images.pharmeasy.in/marketing/comp_cod.jpg",
    "https://consumer-app-images.pharmeasy.in/marketing/comp_3step.jpg",
    "https://consumer-app-images.pharmeasy.in/marketing/comp_india_covered.jpg",
]

let counter=0 
let container=document.getElementById("image_slider")
let id; 
let img=document.createElement("img")

id = setInterval(function(){

    if(counter===images.length){
        counter=0
     }

     img.src=images[counter]
     container.append(img)

     
     counter++
},2000)