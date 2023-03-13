import _throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const FORM_KEY = "feedback-form-state";


form.addEventListener('submit', handleSubmit);
form.addEventListener('input', _throttle(handleInputForm, 500));

handleLoad();

function handleInputForm(e) {
    const formData = new FormData(form);
    const submitData = {};
    formData.forEach((value, key) => {
        submitData[key] = value;
    });
    localStorage.setItem(FORM_KEY, JSON.stringify(submitData));
}

function handleLoad() {
        const saveData = JSON.parse(localStorage.getItem(FORM_KEY));
        if (saveData) {
            email.value = saveData.email;
            message.value = saveData.message;
        }
}
    
function handleSubmit(e) {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem(FORM_KEY));

    if (data.email === '' || data.message === '') {
        alert('Fill in all the fields');
        return;
    }
    console.log(data);
    localStorage.removeItem(FORM_KEY);
    e.currentTarget.reset();
    
}