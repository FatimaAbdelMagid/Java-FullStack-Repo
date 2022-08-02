function register(){
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
var email = document.getElementById('email').value;

var welcomeMsg = "Welcome " + username + "!"+"<br>" + 
                    "This is your password, right? " + password + "<br>"+
                    "Do not worry, It is a secret only you know! ;) <br>"+
                    "And finally this is your email: "+email;
//console.log(welcomeMsg); 
document.getElementById('message').innerHTML = welcomeMsg
}