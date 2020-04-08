; (function () {
  const section = $('.section');
  const containerSection = $('.main-content');
  let numberSection;
  let transitionEnd = false;

  const moveSection = sectionEq => {
    const position = sectionEq * -100;
    const activeSection = containerSection.find('.active');
    const indexSection = section.eq(sectionEq);

    if (transitionEnd === false) {
      transitionEnd = true;

      containerSection.css({
        transform: `translateY(${position}%)`
      });

      activeSection.removeClass('active');
      indexSection.addClass('active');
    };

    $(document).on('transitionend', () => {
      transitionEnd = false;
    })
  }


  $(window).on('wheel', e => {
    const activeSection = containerSection.find('.active');
    const nextIndex = activeSection.next().index();
    const prevIndex = activeSection.prev().index();

    const deltaY = e.originalEvent.deltaY;

    numberSection = deltaY > 0 ? nextIndex : prevIndex;

    if (numberSection >= 0) {
      moveSection(numberSection);
    }
  })

  $(document).on('keydown', (e) => {
    const activeSection = containerSection.find('.active');
    const nextIndex = activeSection.next().index();
    const prevIndex = activeSection.prev().index();
    const tagName = e.target.tagName.toLowerCase();

    if (tagName != 'input' && tagName != 'textarea') {
      if (e.keyCode == 40) {
        numberSection = nextIndex;
        if (numberSection >= 0) {
          moveSection(numberSection);
        }
      }

      if (e.keyCode == 38) {
        numberSection = prevIndex;
        if (numberSection >= 0) {
          moveSection(numberSection);
        }
      }
    }
  })

  $('[data-scroll-to]').on('click', e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const target = $this.attr('data-scroll-to');
    moveSection(target - 1);
  })

  $(window).on('touchstart', e => {
    let touch = e.changedTouches[0];
    let start = parseInt(touch.clientY);
    $(window).on('touchend', e => {
      let touch = e.changedTouches[0];
      let dist = parseInt(touch.clientY) - start;

      console.log(dist)
      const activeSection = containerSection.find('.active');
      const nextIndex = activeSection.next().index();
      const prevIndex = activeSection.prev().index();


      numberSection = dist < 0 ? nextIndex : prevIndex;

      if (numberSection >= 0) {
        moveSection(numberSection);
      }
    })
  })

  const sectionAside = $('.section');
  const asideContainer = $('.aside__list');

  const asideGenerator = function () {
    $(sectionAside).each(function (index) {
      let item = $('<li>', {
        attr: {
          class: 'aside__item'
        },
        html: `<a href="#" class="aside__link" data-scroll-to=${index}></a>`
      })
      $(asideContainer).append(item);
    })
  }

  asideGenerator()

  $('.aside__link').on('click', e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const item = $('.aside__item');

    moveSection($this.attr('data-scroll-to'));

    if ($this.hasClass('aside__link_active')) {
      $this.removeClass('aside__link_active');
    } else {
      $this.removeClass('aside__link_active');
      $this.addClass('aside__link_active');
    }
  })
})()