;(function () {

function openMenu() {
  const humb = document.querySelector('.hamburger');
  let menu = document.querySelector('.menu');
  const href = document.querySelectorAll('.menu__link');
  humb.addEventListener('click', function () {
    if (humb.classList.contains('hamburger_active')) {
      menu.classList.remove('menu_overlay');
      humb.classList.remove('hamburger_active');
    } else {
      menu.classList.add('menu_overlay');
      humb.classList.add('hamburger_active');
    };
  });
  for (let i = 0; i < href.length; i++) {
    href[i].addEventListener('click', function () {
      if (humb.classList.contains('hamburger_active')) {
        menu.classList.remove('menu_overlay');
        humb.classList.remove('hamburger_active');
      } else {
        menu.classList.add('menu_overlay');
        humb.classList.add('hamburger_active');
      }
    })
  }
}
})()
