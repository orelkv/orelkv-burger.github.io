// var itemActive = 'menu-accordeon__item_active';
// var leftCol = document.querySelector('menu-accordeon__left-col');

// console.log(leftCol.className);
// leftCol.classList.add(itemActive);
// leftCol.parentElement.addEventListener('click', function () {
//   console.log(itemActive.className);
// })

var activeAccordionClass = 'menu-accordeon__item_active'
var nameLinks = []

// document.addEventListener('DOMContentLoaded',function () {
//   initAccordion()
// })

function initAccordion() {
  nameLinks = document.getElementsByClassName('menu-accordeon__left-col')
  for (var i = 0; i < nameLinks.length; i++){
    var nameLink = nameLinks[i]
    nameLink.addEventListener('click', clickOnName)
  }
}
function clickOnName(e) {
  e.preventDefault()
  var element = e.target
  var parentElement = element.parentElement
  if (parentElement.classList.contains(menuAccordeonItemActive)){
    parentElement.classList.remove(menuAccordeonItemActive)
  } else {
    for (var i = 0; i < nameLinks.length; i++) {
      var nameLink = nameLinks[i]
      nameLink.parentElement.classList.remove(menuAccordeonItemActive)
    }
    parentElement.classList.add(menuAccordeonItemActive)
  }
}