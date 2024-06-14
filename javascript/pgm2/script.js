let username = document.getElementById('name');
let password = document.getElementById('psw');
let btn = document.getElementById('btn');

function formVakidation(){
    if(username.value != "" && password.value != "")
    {
        alert("Your dta successfully added !!!")
    }
    else{
        alert("Please enter your username and password...")
    }
}

// function printMsg(){
//     console.log("i am clicked");
// }

btn.onclick = formVakidation;
