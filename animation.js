const leftCol=document.getElementsByClassName('menuAccordeonLeftCol');
const rightCol=document.getElementsByClassName('menuAccordeonRightCol');
const itemActive=document.getElementsByClassName('menuAccordeonItem');

leftCol.addEventListener ('click', function() {
console.log(leftCol.className);
console.log(rightCol.className);
console.log(itemActive.className);


  itemActive.classList.toggle('menu-accordeon__item_active');
})