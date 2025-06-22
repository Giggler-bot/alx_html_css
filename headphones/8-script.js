const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})


// document.addEventListener('DOMContentLoaded', () => {
//   const hamburger = document.getElementById('#mobile-menu');
//   const menu = document.querySelector('.navbar-menu');

//   hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('is-active');
//     menu.classList.toggle('active');
//   });
// });
