const composClos = document.querySelector('.composition__close');
const composContent = document.querySelector('.composition__content');
const compos = document.querySelector('.composition');

// compos.addEventListener('click', function () {
//   composContent.removeAttribute('style');
//   compos.removeAttribute('style');
//   composContent.style.display = 'flex';
//   compos.style.backgroundColor = 'rgb(227, 80, 40)';
// });

composClos.addEventListener('click', function () {
  composContent.style.display = 'none';
  compos.style.backgroundColor = '#f08c33';
  // compos.removeAttribute('style');
  // composContent.removeAttribute('style');
});