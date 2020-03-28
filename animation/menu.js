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

// function openMenu() {
//   const humb = document.querySelector('.hamburger');
//   let menu = document.querySelector('.menu');
//   const href = document.querySelectorAll('.menu__link');
//   humb.addEventListener('click', function () {
//     if (humb.classList.contains('hamburger_active')) {
//       menu.classList.remove('menu_overlay');
//       humb.classList.remove('hamburger_active');
//     } else {
//       menu.classList.add('menu_overlay');
//       humb.classList.add('hamburger_active');
//     };
//   });
//   for (let i = 0; i < href.length; i++) {
//     href[i].addEventListener('click', function () {
//       if (humb.classList.contains('hamburger_active')) {
//         menu.classList.remove('menu_overlay');
//         humb.classList.remove('hamburger_active');
//       } else {
//         menu.classList.add('menu_overlay');
//         humb.classList.add('hamburger_active');
//       }
//     })
//   }
// }





// const humb = document.querySelector('.hamburger');
// var menu = document.querySelector('.menu');
// var menuClos = document.querySelector('.close__menu');
// const href = document.querySelectorAll('.menu__link');
// const wrap = document.querySelectorAll('.menu__link');

// humb.addEventListener('click', function (open) {
//   let over = document.createElement('div');
//   over.classList.add('overlay');
//   wrap.appendChild(over);
//   menu.style.display = 'flex';
// });


// menuClos.addEventListener('click', function () {
//   let over = document.querySelector('.overlay');
//   wrap.removeChild(over);
//   menu.style.display = 'none';
// });

// for (i = 0; i < href.length; i++) {
//   href[i].addEventListener('click', function () {
//     let over = document.querySelector('.overlay');
//     wrap.removeChild(over);
//     menu.style.display = 'none';
//   });
// }
