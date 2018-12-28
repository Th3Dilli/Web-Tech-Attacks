let greeting = document.querySelector("#userGreeting");
let loginForm = document.querySelector("#loginForm");
let logoutForm = document.querySelector("#logoutForm");
let loginMessage = document.querySelector("#loginMessage");

let username = document.querySelector("#username");
let password = document.querySelector("#password"); 

let config =
{
    userInfo : "wt_attacks_info"
}

let debug = true;

function log(text) {
    if(debug === true)
    console.log(text)
    
}

function createCookie(jsonData) {
    let now = new Date();
    let time = now.getTime();
    time += 3600000;
    now.setTime(time);
    document.cookie =
    config.userInfo + '=' + JSON.stringify(jsonData) +
        ';expires=' + now.toUTCString() +
        ';path=/';
}

function deleteCookie()
{
    document.cookie = config.userInfo + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
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
                createCookie(jsonData)
                //loginMessage.innerHTML = "Logged in as " + jsonData.username
                init()
            });
        
    }
}

function logout()
{
    deleteCookie();
    init();
}

function init()
{
    let cookie = document.cookie;
    log(cookie)
    if (cookie)
    {
        let cookieVar = cookie.split("=");
        cookieVar[0] = config.userInfo
        user = JSON.parse(cookieVar[1]);
        loginForm.style.display = 'none';
        logoutForm.style.display = 'block';
        greeting.innerHTML = "Logged in as " + user.username
        let token = JSON.parse(document.cookie.split("=")[1]).token;
        log("token : " + token)

        fetch("http://localhost:3000/home",{
        method: "GET",
        headers: {
                    "Content-Type": "application/json",
                    "Authorization" : token
                }
            })
    }
    else
    {
        loginForm.style.display = 'block';
        logoutForm.style.display = 'none';
    }
}

init()

//JSON.parse(document.cookie.split("=")[1]).token