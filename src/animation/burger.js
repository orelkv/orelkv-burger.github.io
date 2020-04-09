; (function () {
  $(function () {

    var moveSlide = function (container, indexItem) {
      var slider = container.find('.burger__slider'),
        itemBurger = container.find('.burger__content'),
        activeItem = itemBurger.filter('.active'),
        lengthItem = itemBurger.eq(indexItem),
        index = lengthItem.index(),
        duration = 300;

      if (lengthItem.length) {
        slider.animate({
          'left': -index * 100 + '%'
        }, duration, function () {
          activeItem.removeClass('active');
          lengthItem.addClass('active');
        })
      }
    }

    $('.burger__btn').on('click', function (e) {
      e.preventDefault();
      var $this = $(this),
        container = $this.closest('.burger__container'),
        itemBurger = container.find('.burger__content'),
        activeItem = itemBurger.filter('.active');

      if ($this.hasClass('burger__btn_right')) {
        var existItem = activeItem.next();
        var edgeItem = itemBurger.first();
      };

      if ($this.hasClass('burger__btn_left')) {
        var existItem = activeItem.prev();
        var edgeItem = itemBurger.last();
      };

      var reqItem = existItem.length ? existItem.index() : edgeItem.index();

      moveSlide(container, reqItem);
    })
  })
})()