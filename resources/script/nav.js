const main_menu = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.nav-mobile');

main_menu.addEventListener('click', function(){
    main_menu.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector('.error');

    errorDisplay.innerText = message;
    formControl.classList.add('error');
    formControl.classList.remove('success')
}

const setSuccess = element => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector('.error');

    errorDisplay.innerText = '';
    formControl.classList.add('success');
    formControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

};
