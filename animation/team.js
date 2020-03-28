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

    // for (var teamEL of teamTitle) {
    //   teamEL.parentElement.classList.remove('team-accordeon__item_active');
    // };

    // вариант цикла вместо следующего
    // for (i = 0; i < teamTitle.length; i++) {
    //   var teamEL = teamTitle[i];
    //   teamEL.parentElement.classList.remove('team-accordeon__item_active');
    // };

    // elementParent.classList.toggle('team-accordeon__item_active');


    //эта цепочка заменяет метод toggle, но для него не работает закрытие
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
