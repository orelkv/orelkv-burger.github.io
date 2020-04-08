; (function () {
  $(() => {

    var moveSlide = function (container, indexItem) {
      var slider = container.find('.burger__slider'),
        item = container.find('.burger__content'),
        activeItem = item.filter('.active'),
        reqItem = item.eq(indexItem),
        index = reqItem.index(),
        duration = 300;

      if (reqItem.length) {
        slider.animate({
          'left': -index * 100 + '%'
        }, duration, function () {
          activeItem.removeClass('active');
          reqItem.addClass('active');
        })
      }
    }

    $('.burger__btn').on('click', function (e) {
      e.preventDefault();
      var $this = $(this),
        container = $this.closest('.burger__container');
        item = container.find('.burger__content'),
        activeItem = item.filter('.active'),
        nextItem = activeItem.next(),
        prevItem = activeItem.prev();

      if ($this.hasClass('burger__btn_right')) {
        var existItem = activeItem.next();
        var edgeItem = item.first();
      }

      if ($this.hasClass('burger__btn_left')) {
        var existItem = activeItem.prev();
        var edgeItem = item.last();
      }
      reqItem = existItem.length ? existItem.index() : edgeItem.index();

      moveSlide(container, reqItem);
    })
  })
})()