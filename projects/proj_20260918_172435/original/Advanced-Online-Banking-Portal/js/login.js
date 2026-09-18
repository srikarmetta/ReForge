function login(){

var user =
document.getElementById("username").value

var pass =
document.getElementById("password").value

var savedPass =
localStorage.getItem("password") || "1234"

if(user === "admin" && pass === savedPass)
{
window.location.href = "dashboard.html"
}
else
{
document.getElementById("error").innerHTML =
"Invalid Credentials!"
}

}