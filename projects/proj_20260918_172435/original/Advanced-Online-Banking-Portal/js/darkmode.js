document
.getElementById("darkToggle")
.addEventListener("click", function(){

document.body.classList.toggle("dark-mode")

if(document.body.classList.contains("dark-mode"))
{
localStorage.setItem("mode","dark")
}
else
{
localStorage.setItem("mode","light")
}

})

window.addEventListener("load", function(){

var mode = localStorage.getItem("mode")

if(mode === "dark")
{
document.body.classList.add("dark-mode")
}

})