let email = document.getElementById('email')
let password = document.getElementById('pass')
let btn = document.getElementById('btn')
let div = document.getElementById('message')


function validate(){
    let eValue = email.value;
    let pValue = password.value;

    if(eValue !="" && eValue.includes("@") && eValue.includes(".")){
        // console.log("Email is valid")
        if(pValue !="" && pValue.length >=4){
            // console.log("Password is valid")
            div.innerText="Email and password valid"
            div.style.color="green"
            btn.removeAttribute("disabled")
        }
    }
    else{
        console.log("Email or Password is invalid")
        div.innerText="Email or password validation failed"
        div.style.color="red"
    }
}

// password.onchange=validate
password.addEventListener('keypress',validate)


// 1. create a form with email ad password validation with message on consoole
// 2. print error and success message on screen
// 3. message color