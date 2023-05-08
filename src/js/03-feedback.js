import throttle from 'lodash.throttle';

const input = document.querySelector('input');
const message = document.querySelector('textarea');
const submitForm = document.querySelector('form');
const formFeedback = {
  email: '',
  message: '',
};
const formChanged = event => {
  formFeedback.email = input.value;
  formFeedback.message = message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formFeedback));
};

const submitBtnClick = event => {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  if (formElements.email.value === '' || formElements.message.value === '') {
    alert('Всі поля повинні бути не пусті!!!');
  } else {
    const object = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(object);
    // console.log(`{email:${object.email} message:${object.message}}`);
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  }
};

const updateBrowserform = () => {
  const formElements = submitForm.elements;
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
input.addEventListener('input', throttle(formChanged, 500));
message.addEventListener('input', throttle(formChanged, 500));
submitForm.addEventListener('submit', submitBtnClick);
