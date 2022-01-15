let username = document.getElementById("username");
let email = document.getElementById("email");
let password =document.getElementById('password');
let passAgain = document.getElementById("passwordAgain");
let strucna = document.getElementById("strucna");
let reset = document.getElementById("reset");
let submit = document.getElementById("submit");

function validate () {
    if(username.value.length <= 2)
    {
        document.getElementById("errorUsername").innerHTML = "Korisnicko ime mora imati vise od 2 znaka";
        username.classList.add("error");
        username.validate=false;
        
    }

    console.log(password)
    console.log(password.value);
    console.log(passAgain.value);

    if(password.value !== passAgain.value)
    {   
        console.log(123);
        document.getElementById("errorPasswordAgain").innerHTML = "Passwordi se ne podudaraju.";
        passAgain.classList.add("error");
    }
}

//submit.addEventListener('click')

