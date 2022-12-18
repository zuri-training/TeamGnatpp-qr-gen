const registerForm = document.getElementById('form')

function registerUser(event){
    event.preventDefault();
    let fullname = event.target.fullname.value;
    let email = event.target.email.value;
    let password = event.target.encry_password.value;

 
    if (!fullname || !email || !encry_password) {
        alert("All fields are required")
        return;
    }


    let userObj = {
        fullname,
        email,
        password,
    };

    fetchAPI(userObj, '/signup', 'POST').then(data => {
        if(data.status){
            // alert('User created successfully')
            window.location.href = '../../pages/login/login.html';
        }
    //  else{
    //         alert('User already exist')
    //     }
    });
};


registerForm.addEventListener('submit', registerUser);