document
.getElementById("checkLoan")
.addEventListener("click", function(){

var income =
parseFloat(document.getElementById("income").value)

var emi =
parseFloat(document.getElementById("emi").value)

if(isNaN(income) || isNaN(emi))
{
document.getElementById("result").innerHTML =
"Please enter valid values"
return
}

var eligible = (income * 0.5) - emi

if(eligible > 0)
{
document.getElementById("result").innerHTML =
"You are eligible for EMI up to INR" + eligible.toFixed(2)
}
else
{
document.getElementById("result").innerHTML =
"Loan not recommended based on your income"
}

})