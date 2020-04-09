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
      $('.aside__item').eq(sectionEq)
        .addClass('aside__item_active')
        .siblings().removeClass('aside__item_active')
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

  const md = new MobileDetect(window.navigator.userAgent);
  const isMobile = md.mobile();

  if (isMobile) {
    $('body').swipe({
      swipe: (event, direction) => {
        const activeSection = containerSection.find('.active');
        const nextIndex = activeSection.next().index();
        const prevIndex = activeSection.prev().index();
        const tagName = event.target.tagName.toLowerCase();

        if (tagName != 'ymaps') {
          if (direction === 'up') {
            numberSection = nextIndex;
            if (numberSection >= 0) {
              moveSection(numberSection);
            }
          }

          if (direction === 'down') {
            numberSection = prevIndex;
            if (numberSection >= 0) {
              moveSection(numberSection);
            }
          }
        }
      }
    })
  }

  const sectionAside = $('.section');
  const asideContainer = $('.aside__list');

  const asideGenerator = function () {
    $(sectionAside).each(function (index) {
      let itemAside = $('<li>', {
        attr: {
          class: 'aside__item'
        },
        html: `<a href="#" class="aside__link" data-scroll-to=${index}></a>`
      })
      $(asideContainer).append(itemAside);
    })
  }

  asideGenerator()

  $('.aside__link').on('click', e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    moveSection($this.attr('data-scroll-to'));
  })
})()