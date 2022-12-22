const form = document.getElementById('form');




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
        }
    });
}

form.addEventListener('submit', loginUser)