;(function () {

const form = document.querySelector('.form');
const btn = document.querySelector('#form__btn');
const modal = document.querySelector('.modal__content');
const btnModal = document.querySelector('.modal__btn');

btn.addEventListener('click', event => {
  event.preventDefault();

  var formData = new FormData(form);

  formData.append("to", 'orelkv@mail.ru')

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
  xhr.send(formData);
  
  xhr.addEventListener('load', () => {
    var answer;
    if (!xhr.response) {
      answer = 'Сообщение отправлено';
    } else {
      answer = xhr.response.message;
    }

    modal.parentElement.classList.add('modal_open');
    modal.firstElementChild.textContent = answer;
    document.body.style.overflow = 'hidden';

  })
})

btnModal.addEventListener('click', function () {
  event.preventDefault();
  modal.parentElement.classList.remove('modal_open');
  document.body.style.overflow = 'initial';
})
})()