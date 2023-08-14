import throttle from 'lodash.throttle';
const elements = {
    form: document.querySelector('.feedback-form'),
    email : document.querySelector('.feedback-form input'),
    message : document.querySelector('.feedback-form textarea')
};
elements.form.addEventListener('input', throttle(onData, 500))
elements.form.addEventListener('submit', onFormSubmit)

const STOR_KEY = 'feedback-form-state';
const formData = {};

//Переробила функцію, щоб прибрати баг undefined
function onData(){
    const formData = {
        email : elements.email.value,
        message : elements.message.value,
    }
    localStorage.setItem(STOR_KEY, JSON.stringify(formData)); 
}



function onFormSubmit(evt) {
    console.log(JSON.parse(localStorage.getItem(STOR_KEY)));
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STOR_KEY);
};


(function textOn() {
    const save = JSON.parse(localStorage.getItem(STOR_KEY));
   
    if (save) {
        elements.email.value = save.email;
        elements.message.value = save.message;
       
    }
    elements.email.currentTarget = '';
    elements.message.currentTarget = '';
    })();




    