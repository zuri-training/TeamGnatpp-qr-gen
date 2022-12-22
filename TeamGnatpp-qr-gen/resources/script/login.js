const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('encry_password');

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
        return
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        return
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
        return
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 3 character.');
        return
    } else {
        setSuccess(password);
    }
  window.location.href = "../dashboard/dashboard.html";
};




function loginUser(event){
    event.preventDefault();
    
    let email = event.target.email.value;
    let password = event.target.password.value;

    if (!email || !password) {
        alert("All fields are required")
        return;
    }


    let userObj = {
        email,
        password,
    }

    fetchAPI(userObj, '/signin', 'POST').then(data => {
        if(data.status){
           alert(data.message);
            window.location.href = "../dashboard/dashboard.html";
        } else{
            alert(data.message)
            return
        }
    });
}

form.addEventListener('submit', loginUser)