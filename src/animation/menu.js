;(function () {

document.addEventListener('DOMContentLoaded', function () {
  openMenu();
});

function openMenu() {
  const humb = document.querySelector('.hamburger');
  var menu = document.querySelector('.menu');
  var menuClos = document.querySelector('.close__menu');
  const href = document.querySelectorAll('.menu__link');
  humb.addEventListener('click', function () {
    if (menuClos.classList.contains('close__menu_active')) {
      menu.classList.remove('menu_overlay');
      menuClos.classList.remove('close__menu_active');
    } else {
      menu.classList.add('menu_overlay');
      menuClos.classList.add('close__menu_active');
    };
  });
  menuClos.addEventListener('click', function () {
    if (menuClos.classList.contains('close__menu_active')) {
      menu.classList.remove('menu_overlay');
      menuClos.classList.remove('close__menu_active');
    }
  });
  for (let i = 0; i < href.length; i++) {
    href[i].addEventListener('click', function () {
      if (menuClos.classList.contains('close__menu_active')) {
        menu.classList.remove('menu_overlay');
        menuClos.classList.remove('close__menu_active');
      }
    })
  }
}
})()
