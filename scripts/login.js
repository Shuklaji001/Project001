document.querySelector("form").addEventListener("submit", logIn)
var getDataArr = JSON.parse(localStorage.getItem("allData")) || []

function logIn() {
    event.preventDefault()

    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    console.log(getDataArr)

    let check = false;

    let Auth = getDataArr.filter(function (e) {
        if (e.username === username && e.password === password) {
            check = true;
            return ;
        }
    })
    
    if(check){
        alert("Login successful")
        window.location.href = "movies.html"
    }
    else{
        alert("Login failed")
        
    }
}