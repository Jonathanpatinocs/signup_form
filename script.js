

const submit = document.getElementById('signupform');

submit.addEventListener('submit' ,()=> {
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('passwordconfirm').value;
    if (password == confirm) {
        alert("Valid")
    }
    else {
        alert("Invalid");
    }
})