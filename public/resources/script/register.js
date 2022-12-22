const registerForm = document.getElementById('form')


function registerUser(event){
    event.preventDefault();
    let fullname = event.target.fullname.value;
    let email = event.target.email.value;
    let password = event.target.encry_password.value;

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
 
    if(fullname === '') {
        (fullname, 'Name is required');
        return
    } else {
        (fullname);
    }

    if(email === '') {
        (email, 'Email is required');
        return
    } else if (!isValidEmail(email)) {
        (email, 'Provide a valid email address');
        return
    } else {
        (email);
    }

    if(password === '') {
       (encry_password, 'Password is required');
        return
    } else if (password.length < 8 ) {
        (encry_password, 'Password must be at least 8 character.');
        return
    } else {
        (password);
    }


    let userObj = {
        fullname,
        email,
        password,
    };

    fetchAPI(userObj, '/signup', 'POST').then(data => {
        if(data.status){
            alert(data.message)
            window.location.href = '../../pages/login/login.html';
        }
     else{
            alert(data.message)
        }
    });
};


registerForm.addEventListener('submit', registerUser);