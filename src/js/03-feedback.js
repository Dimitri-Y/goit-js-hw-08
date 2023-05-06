import throttle from 'lodash.throttle';

const input = document.querySelector('input');
const message = document.querySelector('textarea');
const submitForm = document.querySelector('form');

const inputChanged = event => {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: event.currentTarget.value, message: message.value })
  );
};
const messageChanged = event => {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: input.value, message: event.currentTarget.value })
  );
};

const submitBtnClick = event => {
  localStorage.clear();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
};
const updateBrowserform = () => {
  formElements = submitForm.elements;
  try {
    let { email, message } = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    if (email === undefined || message === undefined) {
      formElements.email.value = '';
      formElements.message.value = '';
    } else {
      formElements.email.value = email;
      formElements.message.value = message;
    }
  } catch (error) {}
};
updateBrowserform();
input.addEventListener('input', throttle(inputChanged, 500));
message.addEventListener('input', throttle(messageChanged, 500));
submitForm.addEventListener('submit', submitBtnClick);
