let greeting = document.querySelector("#userGreeting");
let loginForm = document.querySelector("#loginForm");
let loginMessage = document.querySelector("#loginMessage");

let username = document.querySelector("#username");
let password = document.querySelector("#password"); 


let debug = true;

function log(text) {
    if(debug === true)
    console.log(text)
    
}

function login()
{
    if(username.value === "")
    {
        log("No valid username")
        loginMessage.innerHTML ="No valid username"
    }
    else if( password.value === "")
    {
        log("No valid password")
        loginMessage.innerHTML ="No valid password"
    }
    else
    {
        log("U: " + username.value + "\tPW: " + password.value)
        loginMessage.innerHTML = "U: " + username.value + "\tPW: " + password.value
        fetch("http://localhost:3000/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username : username.value,
                password: password.value
            })
        })
        .then( response => response.json())
        .then(jsonData => 
            {
                console.log(jsonData);
            });
        
    }
}