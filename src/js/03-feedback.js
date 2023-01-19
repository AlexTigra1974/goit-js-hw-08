import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
console.dir(form);

const STORAGE_KEY = 'feedback-form-state';
let formData = {};
console.log(formData);

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormSubmit(e) {
  e.preventDefault();

  const { email, message } = e.currentTarget;
  if (!email.value || !message.value) {
    alert('Всі поля повинні бути заповнені!');
  }

  e.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(e) {
  // console.log(e.target.name);
  // console.log(e.target.value);
  formData[e.target.name] = e.target.value;
  // console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  if (localStorage.getItem(STORAGE_KEY));

  {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    console.log(form.elements);
  }
  // form.elements[name]
  for (const key in formData) {
    form.elements[key].value = formData[key];
  }
}
