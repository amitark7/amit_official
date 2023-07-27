const navbar=document.querySelector(".navbar");
window.addEventListener('scroll',()=>{
   if(this.scrollY>20)
   {
    navbar.classList.toggle("sticky");
   }
   else{
    navbar.classList.remove('sticky');
   }
})
// function changeCss () {
//     var navbar = document.querySelector(".navbar");
//     // var navElement = document.querySelector("nav");
//     this.scrollY > 20 ? navbar.classList.toggle("sticky"):navbar.classList.remove("sticky");
//   }
  
//   window.addEventListener("scroll", changeCss , false);


const menubtn=document.querySelector(".menu-btn");
const menu=document.querySelector(".menu");

menubtn.addEventListener('click',()=>{
  menu.classList.toggle("active")

  let menu_child=menubtn.firstElementChild;
  if(menu.classList.contains("active"))
  {
    menu_child.classList.replace('fa-bars','fa-xmark');
  }
  else{
    menu_child.classList.replace('fa-xmark','fa-bars');
  }
})


// Typing Animation
// $(".teams-content").owlCarousel({
//   margin:20,
//   loop:true,
//   autoplayTimeOut:2000,
//   autoplayHoverPause:true
// });