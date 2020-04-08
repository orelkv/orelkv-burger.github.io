;(function () {

document.addEventListener('DOMContentLoaded', function () {
  openTeam();
});

function openTeam() {
  var teamTitle = document.getElementsByClassName('team-accordeon__title');
  var i;
  for (var teamEL of teamTitle) {
    teamEL.addEventListener('click', onClick)
  };

  function onClick(e) {
    e.preventDefault;
    var element = e.target;
    var elementParent = element.parentElement;

    if (elementParent.classList.contains('team-accordeon__item_active')) {
      elementParent.classList.remove('team-accordeon__item_active');
    } else {
         for (var teamEL of teamTitle) {
      teamEL.parentElement.classList.remove('team-accordeon__item_active');
    };
      elementParent.classList.add('team-accordeon__item_active');
    }
  }
}
})()