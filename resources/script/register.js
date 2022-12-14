const registerForm = document.getElementById('register')

function registerUser(event){
    event.preventDefault();
    console.log(event.target.fullname.value);

    let fullname = event.target.fullname.value;
    let email = event.target.email.value;
    let password = event.target.password.value;

    if (!fullname || !email || !password) {
        alert("All fields are required")
        return;
    }


    let userObj = {
        fullname,
        email,
        password,
    }

    fetchAPI(userObj, 'api/signup', 'POST').then(data => {
        if(data.status){
            alert('User created successfully')
            window.location.href = "../login/login.html";
        }
    });
}

registerForm.addEventListener('submit', registerUser)