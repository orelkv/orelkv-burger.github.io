$(function () {
  
  $('.wrapper').on('wheel', function (e) {
    e.preventDefault();
    var $this = $(this), 
    sect = $this.find('.section'),
    activeSect = sect.filter('.active'),
    nextSect = activeSect.next(),
    prevSect = activeSect.prev();
    if(e.originalEvent.deltaY>0) {
      moveSection ($this, nextSect.index());
    } 

    $('.wrapper').on('swipe touchmove mousemove', function (e) {
      $this.onwheel;
    });
    })   

    
    var moveSection = function (container, index) {
      sect = container.find('.section'),
      activeSect = sect.filter('.active'),
      indexSect = sect.eq(index),
      step = 100,
      duration = 200;
  
    if (indexSect.length) {
      container.stop(true, false).animate({
        'top' : -indexSect.index()*step + 'vh'
      }, duration, function (){
        activeSect.removeClass('active');
        indexSect.addClass('active');
      })
    }
  }

})