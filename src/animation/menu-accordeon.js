;(function () {

document.addEventListener('DOMContentLoaded', function () {
  menuOpen()
})

var activeAccordionClass = 'menu-accordeon__item_active';
var nameLinks = document.getElementsByClassName('menu-accordeon__left-col');

function menuOpen() {
  for (var nameLink of nameLinks) {
    nameLink.addEventListener('click', clickOn)
  }
};

function clickOn(e) {
  e.preventDefault;
  var elem = e.currentTarget;
  var title = elem.parentElement;

  if (title.classList.contains(activeAccordionClass)) {
    for (var nameLink of nameLinks) {
      nameLink.parentElement.classList.remove(activeAccordionClass);
    };
  } else {
    for (var nameLink of nameLinks) {
      nameLink.parentElement.classList.remove(activeAccordionClass);
    };
    title.classList.add(activeAccordionClass);
  }
}
})()
