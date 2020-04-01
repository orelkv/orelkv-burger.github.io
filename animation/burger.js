document.addEventListener('DOMContentLoaded', function () {
  sliderBurger();
});

const left = document.querySelector('.burger__btn_left');
const right = document.querySelector('.burger__btn_right');
const slider = document.querySelector('.burger__slider');
const sliderStep = 100;
const minRight = 100;
const maxRight = 100;
var currentRight = 0;

function sliderBurger() {
  left.addEventListener('click', function () {
    slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
    // currentRight -= sliderStep;

    // console.log(slider.style.right)
    // slider.style.right = currentRight +"%";
    // slider.style.right= '100%';
    // currentRight = 0;
    
  })
  
  right.addEventListener('click', function () {
    slider.appendChild(slider.firstElementChild);
    // currentRight -= sliderStep;
    // var cvb = currentRight + '%';
    // slider.style.right = cvb;
    // console.log(cvb);
    // console.log(slider.style.right);
    
      // slider.style.right= '100%';
      // currentRight = 0;    
  })
}

// document.addEventListener('DOMContentLoaded', function () {
//   sliderBurger();
// });

// const left = document.querySelector('.burger__btn_left');
// const right = document.querySelector('.burger__btn_right');
// const wrap = document.querySelector('.burger__wrap');
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