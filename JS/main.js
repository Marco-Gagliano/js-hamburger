const submenuHamburger = document.querySelector('.hamburger-menu');
const iconHamburger = document.querySelector('.fas.fa-bars');
const iconClose = document.querySelector('.close');


iconHamburger.addEventListener('click', function(){

  submenuHamburger.classList.add('active');
});


iconClose.addEventListener('click', function(){
  
  submenuHamburger.classList.remove('active');
});