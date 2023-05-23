var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
// console.log(form);
let email = document.getElementsByName('email')[0];
// console.log(email);
let message = document.getElementsByName('message')[0];
// console.log(message);

form.addEventListener('input', event => {
  // localStorage.setItem('email', email.value);
  // localStorage.setItem('message', message.value);
  const emailAndMessage = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(emailAndMessage));
});

window.addEventListener('load', event => {
  const savedEmailMessage = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (savedEmailMessage !== null) {
    email.value = savedEmailMessage.email;
    message.value = savedEmailMessage.message;
  } else return;
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (localStorage.getItem('feedback-form-state') !== null) {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    console.log(
      `Email = ${JSON.parse(localStorage.getItem('feedback-form-state')).email}`
    );
    console.log(
      `Message = ${
        JSON.parse(localStorage.getItem('feedback-form-state')).message
      }`
    );
  }
  email.value = null;
  message.value = null;
  localStorage.removeItem('feedback-form-state');
});
