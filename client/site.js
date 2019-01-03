let loginForm = document.querySelector("#logintForm");
let logoutForm = document.querySelector("#logoutForm");
let loginMessage = document.querySelector("#loginMessage");
let searchForm = document.querySelector("#searchForm");
let home = document.querySelector("#home");
let searchBox = document.querySelector("#searchBox");
let searchResult = document.querySelector("#searchResult"); 
let username = document.querySelector("#username");
let password = document.querySelector("#password"); 

let config =
{
    userInfo : "wt_attacks_info"
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
       alert("No valid username")
    }
    else if( password.value === "")
    {
        alert("No valid password")
    }
    else
    {
        console.log("U: " + username.value + "\tPW: " + password.value)
        
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
                init()
            });
        
    }
}

function logout()
{
    deleteCookie();
    init();
    document.getElementById("navbar").style.display = 'none';
}

function loginOk()
{
    logintForm.style.display = 'none';
    logoutForm.style.display = 'block';
    searchForm.style.display = 'none';
    home.style.display = 'block';
    document.getElementById("homeNavE").classList.add('active');
    document.getElementById("navbar").style.display = 'initial';
}

function searchNav()
{
    searchForm.style.display = 'block';
    home.style.display = 'none';
    document.getElementById("searchNavE").classList.add('active');
    document.getElementById("homeNavE").classList.remove('active');
}

function homeNav()
{
    searchForm.style.display = 'none';
    home.style.display = 'block';
    document.getElementById("homeNavE").classList.add('active');
    document.getElementById("searchNavE").classList.remove('active');

}

function init()
{
    let cookie = document.cookie;
    console.log(cookie)
    if (cookie)
    {
        let cookieVar = cookie.split("=");
        cookieVar[0] = config.userInfo
        user = JSON.parse(cookieVar[1]);
        
        let token = JSON.parse(document.cookie.split("=")[1]).token;
        console.log("token : " + token)

        fetch("http://localhost:3000/home",{
        method: "GET",
        headers: {
                    "Content-Type": "application/json",
                    "Authorization" : token
                }
            })
            .then(response => {
                if(response.ok)
                {
                    loginOk()
                }
                else
                {
                    alert(response.statusText)
                }
            })
    }
    else
    {
        loginForm.style.display = 'block';
        logoutForm.style.display = 'none';
        searchForm.style.display = 'none';
        home.style.display = 'none';
        document.getElementById("navbar").style.display = 'none';
    }
}

function search()
{
    searchResult.innerHTML = "Search result for " + searchBox.value
}

init()
