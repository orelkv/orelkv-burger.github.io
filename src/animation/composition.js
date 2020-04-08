;(function () {

  document.addEventListener('DOMContentLoaded', function () {
    compositionOpen();
  });

  var compos = document.getElementsByClassName('composition');
  var composClose = document.getElementsByClassName('close__composition');

  function compositionOpen() {

    for (var composItem of compos) {
      composItem.addEventListener('click', openCompos);
    }

    for (var composBtn of composClose) {
      composBtn.addEventListener('click', closeCompos)
    }
  }


  function openCompos() {
    var elem = event.currentTarget;
    for (var composItem of compos) {
      composItem.classList.remove('composition_open')
    }
    elem.classList.add('composition_open');
  }


  function closeCompos() {
    event.stopPropagation();
    var clos = event.currentTarget;
    var closeParent = clos.closest('.composition');
    closeParent.classList.remove('composition_open');
  }
})()




