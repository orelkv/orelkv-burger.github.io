$(function () {

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






































// document.addEventListener('DOMContentLoaded', function () {
//   sliderBurger();
// });

// const left = document.querySelector('.burger__btn_left');
// const right = document.querySelector('.burger__btn_right');
// const slider = document.querySelector('.burger__slider');
// const sliderStep = 100;
// const minRight = 100;
// const maxRight = 100;
// var currentRight = 0;

// function sliderBurger() {
//   left.addEventListener('click', function () {
//     slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
//     // currentRight -= sliderStep;

//     // console.log(slider.style.right)
//     // slider.style.right = currentRight +"%";
//     // slider.style.right= '100%';
//     // currentRight = 0;

//   })

//   right.addEventListener('click', function () {
//     slider.appendChild(slider.firstElementChild);
//     // currentRight -= sliderStep;
//     // var cvb = currentRight + '%';
//     // slider.style.right = cvb;
//     // console.log(cvb);
//     // console.log(slider.style.right);

//       // slider.style.right= '100%';
//       // currentRight = 0;    
//   })
// }

// // document.addEventListener('DOMContentLoaded', function () {
// //   sliderBurger();
// // });

// // const left = document.querySelector('.burger__btn_left');
// // const right = document.querySelector('.burger__btn_right');
// // const wrap = document.querySelector('.burger__wrap');
// // const sliderStep = 100;
// // const minRight = 100;
// // const maxRight = 100;
// // var currentRight = 0;

// // function sliderBurger() {
// //   left.addEventListener('click', function () {
// //     slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
// //     // currentRight -= sliderStep;

// //     // console.log(slider.style.right)
// //     // slider.style.right = currentRight +"%";
// //     // slider.style.right= '100%';
// //     // currentRight = 0;

// //   })

// //   right.addEventListener('click', function () {
// //     slider.appendChild(slider.firstElementChild);
// //     // currentRight -= sliderStep;
// //     // var cvb = currentRight + '%';
// //     // slider.style.right = cvb;
// //     // console.log(cvb);
// //     // console.log(slider.style.right);

// //       // slider.style.right= '100%';
// //       // currentRight = 0;    
// //   })
// // }