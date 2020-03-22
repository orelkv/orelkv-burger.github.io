const humb = document.querySelector('.hamburger');
const logo = document.querySelector('.logo');
const menu = document.querySelector('.menu');
const wrap = document.querySelector('.wrapper');
const menuClos = document.querySelector('.menu__close');
const header = document.querySelector('.header');
const href = document.querySelectorAll('.menu__link');
var i;

humb.addEventListener('click', function (open) {
  let over = document.createElement('div');
  over.classList.add('overlay');
  wrap.appendChild(over);

  logo.classList.add('logo_overlay');

  menu.style.display = 'flex';

  header.style.justifyContent = 'flex-end';
});


menuClos.addEventListener('click', function () {
  let over = document.querySelector('.overlay');
  wrap.removeChild(over);

  logo.classList.remove('logo_overlay');

  menu.style.display = 'none';

  header.style.justifyContent = 'space-between';
});


for (i = 0; i < href.length; i++) {

  href[i].addEventListener('click', function () {
    let over = document.querySelector('.overlay');
    wrap.removeChild(over);

    logo.classList.remove('logo_overlay');

    menu.style.display = 'none';

    header.style.justifyContent = 'space-between';
  });
}
