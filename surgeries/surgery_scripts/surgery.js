

  import navbar from "../components/navbar.js";
  let navbarContainer = document.querySelector("#nav_container");
  navbarContainer.innerHTML = navbar();

  import footer from "../components/footer.js";
  let footerContainer = document.querySelector("#footer_container");
  footerContainer.innerHTML = footer();


let surgeryData=[
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/piles.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/piles.jpg",
      "right": "Piles",
      "righ": "Blood vessels in and around the anus get swollen and cause pain"
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/fistula.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/fistula.jpg",
      "right": "Fistula",
      "righ": "A condition causing abnormal linking of two body parts"
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/fissure.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/fissure.jpg",
      "right": "Fissure",
      "righ": "A tear in the tissue lining the anus that causes bleeding"
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/pilonidal-sinus.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/pilonidal_sinus.jpg",
      "right": "Pilonidal Sinus",
      "righ": "A hole forms in the skin near the tailbone with hair and skin"
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/varicose-veins.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/varicose_veins.jpg",
      "right": "Varicose Veins",
      "righ": "Veins get enlarged and twisted, generally near the legs and feet"
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/varicocele.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/varicocele.jpg",
      "right": "Varicocele",
      "righ": "Veins get enlarged and twisted within the scrotum"
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/kidney-stone.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/kidney_stone.jpg",
      "right": "Kidney Stone",
      "righ": "Deposits of minerals and salts that harden within the kidney"
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/phimosis.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/phimosis.jpg",
      "right": "Phimosis",
      "righ": "Inability to retract skin covering the head of the penis"
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/hydrocele.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/hydrocele.jpg",
      "right": "Hydrocele",
      "righ": "Swelling of the scrotum due to fluid build-up around the testicle"
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/cataract.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/cataract.jpg",
      "right": "Cataract",
      "righ": "The lenses of the eyes become cloudy and disrupt clear vision"
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/lasik.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/lasik.jpg",
      "right": "Lasik",
      "righ": "A laser surgery that permanently corrects vision"
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/hernia.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/hernia.jpg",
      "right": "Hernia",
      "righ": "A condition where an internal organ bulges out abnormally"
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/gall-bladder-surgery.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/gall_bladder_surgery.jpg",
      "right": "Gallbladder",
      "righ": "Removal of the gallbladder due to the deposit of stone/Infection in it"
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/appendix.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/appendix.jpg",
      "right": "Appendix",
      "righ": "Inflammation of the appendix due to the accumulation of pus"
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/knee-replacement.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/knee_replacement.svg",
      "right": "Knee Replacement",
      "righ": "Procedure performed on the knee to replace the joint partially or fully"
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/gynecomastia.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/gynecomastia.svg",
      "right": "Gynecomastia",
      "righ": "Noticeable swelling of breast tissue in boys and men"
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/lipoma.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/lipoma.svg",
      "right": "Lipoma",
      "righ": "Fat-based tissue lump that grows just beneath the skin"
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/bariatric.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/bariatric.svg",
      "right": "Bariatric",
      "righ": "Performed to help curb excessive weight gain in case other mehods do not work"
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/breast-cancer.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/breast_cancer.svg",
      "right": "Breast Cancer",
      "righ": "Uncontrolled growth of abnormal cells in a body part/organ"
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/arthroscopy.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/arthroscopy.svg",
      "right": "Arthroscopy",
      "righ": "Minimally invasive procedure to diagnose and treat problems in your joints"
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/hip-replacement.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/hip_replacement.svg",
      "right": "Hip Replacement",
      "righ": "Prosthetic components are used to replace damaged bone and cartilage."
    },
    {
      "surgery-block href": "https://pharmeasy.in/surgicare/liposuction.html",
      "left_src": "https://pharmeasy.in/surgicare/assets/images/swc/liposuction.svg",
      "right": "Liposuction",
      "righ": "A surgical procedure used to remove excess fat."
    }
  ]

  let container=document.getElementById("topics")
  surgeryData.forEach((el)=>{
    let image=document.createElement("img")
    image.src=el.left_src
    let h4=document.createElement("h4")
    h4.innerText=el.right
    let p=document.createElement("p")
    p.innerText=el.righ
    let box=document.createElement("div")
    let box1=document.createElement("div")
    let box2=document.createElement("div")
    box.append(h4,p)
    box1.append(image)
    box2.append(box1,box)
    container.append(box2)
  })