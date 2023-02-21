document.querySelector("form").addEventListener("submit",SignUp);
    var dataArr = JSON.parse(localStorage.getItem("allData")) || [];
    function SignUp(){
        event.preventDefault();
        var email_up=document.getElementById("email").value;

        var username_up=document.getElementById("username").value;

        var number_up=document.getElementById("number").value;

        var password_up=document.getElementById("password").value;

        var dataobj={
          Email:email_up,
          Username:username_up,
          Number:number_up,
          Password:password_up
        }
        
        dataArr.push(dataobj);
        localStorage.setItem("allData" , JSON.stringify(dataArr));
        console.log(dataobj);
        
    }