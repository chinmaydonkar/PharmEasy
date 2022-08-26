


//https://cms-contents.pharmeasy.in/banner/0e7af32e438-2_HP_634x274.jpg
//https://cms-contents.pharmeasy.in/banner/34b5c9105c6-On-time-or-FREEEE_HP_634x274.jpg
//https://cms-contents.pharmeasy.in/banner/06e0037894c-Comp_on_time_HP_634x274.jpg
//https://cms-contents.pharmeasy.in/banner/4acf73cf129-2_MonsoonStomach_HP.jpg
//https://cms-contents.pharmeasy.in/banner/7f7e278a647-1_Family-history_634x274.jpg
//https://cms-contents.pharmeasy.in/banner/b31e77ccae0-GRAND100_PharmaP.jpg

//https://www.youtube.com/watch?v=aRE2Zge1rUI
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
autoplay:{
    delay:2000,
    disableOnInteraction: false,
},

    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });