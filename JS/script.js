// NAVIGATION BAR //
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
const link = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById('hamburger');
const dropDown = document.querySelector('.dropdown');
const subMenu = document.querySelector('.sub-menu');
const menuLinks = document.querySelector('.menu-links');

hamburger.addEventListener('click', function(e) {
  hamburger.classList.toggle('cross');
});

navToggle.addEventListener("click", function () {
   if (links.classList.contains("show-links")) {
     links.classList.remove("show-links");
     links.classList.remove("extend-navbar");
   } else {
     links.classList.add("show-links");
   }
}); 

link.addEventListener("hashchange", function () {
     if (links.classList.contains("show-links")) {
      links.classList.remove("show-links");
     } else {
      links.classList.add("show-links");
     }
});

dropDown.addEventListener("click", function () {
     if (subMenu.classList.contains("show-dropdown")) {
       subMenu.classList.remove("show-dropdown");
       links.classList.remove("extend-navbar");
       menuLinks.classList.add("active");
    } else {
       subMenu.classList.add("show-dropdown");
       links.classList.add("extend-navbar");
       menuLinks.classList.remove("active");
     }
  });

  document.addEventListener("click", function(event){
    const yourContainer = document.querySelector('nav-links');
    if(!links.contains(event.target)) {
       links.classList.remove("extend-navbar");
    }
 });

 


  
  
  
