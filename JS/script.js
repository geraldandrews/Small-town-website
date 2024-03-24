// NAVIGATION BAR //
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
const homeImage = document.querySelector('.logo-img');
const link = document.querySelectorAll('#page');
const hamburger = document.getElementById('hamburger');
const dropDown = document.querySelector('.dropdown');
const subMenu = document.querySelector('.sub-menu');
const menuLinks = document.querySelector('.menu-links');

hamburger.addEventListener('click', function(e) {
  hamburger.classList.toggle('cross');
});

homeImage.addEventListener('click', function () {
  if (links.classList.contains('show-links')) {
    hamburger.classList.toggle('cross');
    links.classList.remove('show-links');
  }
});

navToggle.addEventListener('click', function () {
   if (links.classList.contains('show-links')) {
     links.classList.remove('show-links');
     links.classList.remove('extend-navbar');
   } else {
     links.classList.add('show-links');
   }

  event.preventDefault()
}); 

link.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    hamburger.classList.toggle('cross');
    links.classList.remove('show-links');
    subMenu.classList.remove('show-dropdown');
    links.classList.remove('extend-navbar');
}

 dropDown.addEventListener('click', function () {
     if (subMenu.classList.contains('show-dropdown')) {
       subMenu.classList.remove('show-dropdown');
       links.classList.remove('extend-navbar');
       menuLinks.classList.add('active');
    } else {
       subMenu.classList.add('show-dropdown');
       links.classList.add('extend-navbar');
       menuLinks.classList.remove('active');
     }
  });

  document.addEventListener('click', function(event){
    const yourContainer = document.querySelector('nav-links');
    if(!links.contains(event.target)) {
       links.classList.remove('extend-navbar');
    }
 });

// Page Transition //
document.addEventListener("DOMContentLoaded", () => {
  const anchors = document.querySelectorAll('#page'); 
  const homeLink = document.querySelector('#home');
  
    for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target.href;

      setTimeout(() => {
        window.location.href = target;
      }, 300)
    });
  }

  homeLink.addEventListener('click', e => {
    e.preventDefault();
    let currentTarget = e.currentTarget.href;

    setTimeout(() => {
      window.location.href = currentTarget;
    }, 400)
  });
});




 


 


  
  
  
