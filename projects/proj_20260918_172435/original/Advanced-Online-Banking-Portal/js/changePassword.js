document
.getElementById("changeBtn")
.addEventListener("click", function(){

var oldPass =
document.getElementById("oldPass").value

var newPass =
document.getElementById("newPass").value

var savedPass =
localStorage.getItem("password") || "1234"

if(oldPass === savedPass)
{
localStorage.setItem("password", newPass)

document.getElementById("msg").innerHTML =
"Password changed successfully. Please login again."

setTimeout(function(){
window.location.href="homepage.html"
},2000)
}
else
{
document.getElementById("msg").innerHTML =
"Incorrect old password"
}

})