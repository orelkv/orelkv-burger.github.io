document.addEventListener('DOMContentLoaded', function () {
  openCompos();
});

function openCompos() {
  var compos = document.querySelector('.composition');
  var composClose = document.querySelector('.close__composition');
 
  compos.addEventListener ('click', function () {
      compos.classList.add('composition_open');
  });
  composClose.addEventListener ('click', function () {
    if (compos.classList.contains('composition_open')) {
      compos.classList.remove('composition_open');
    }
  })
}