var timeout

function startSessionTimer()
{

clearTimeout(timeout)

timeout = setTimeout(function(){

alert("Session expired. Please login again.")

window.location.href = "homepage.html"

},300000)

}

document.addEventListener("mousemove", startSessionTimer)
document.addEventListener("keypress", startSessionTimer)
document.addEventListener("click", startSessionTimer)

startSessionTimer()