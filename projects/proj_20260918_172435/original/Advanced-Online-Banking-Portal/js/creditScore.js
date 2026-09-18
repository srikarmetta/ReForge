document
.getElementById("calc")
.addEventListener("click", function(){

var history =
parseFloat(document.getElementById("history").value)

var usage =
parseFloat(document.getElementById("usage").value)

if(isNaN(history) || isNaN(usage))
{
document.getElementById("score").innerHTML =
"Enter valid inputs"
return
}

var score =
(history * 0.7) + ((100 - usage) * 0.3)

var finalScore =
Math.round(score * 8.5)

document.getElementById("score").innerHTML =
"Estimated Credit Score: " + finalScore

})