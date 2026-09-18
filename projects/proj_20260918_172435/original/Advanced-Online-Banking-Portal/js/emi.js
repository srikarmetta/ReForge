document
.getElementById("emiBtn")
.addEventListener("click", calculateEMI)
function calculateEMI(){

    var P = parseFloat(document.getElementById("loan").value);
    var annualRate = parseFloat(document.getElementById("rate").value);
    var years = parseFloat(document.getElementById("years").value);

    if (isNaN(P) || isNaN(annualRate) || isNaN(years) || 
        P <= 0 || annualRate <= 0 || years <= 0) {

        document.getElementById("emiResult").innerHTML = 
            "Please enter valid positive values.";
        return;
    }

    var R = annualRate / 12 / 100;
    var N = years * 12;

    var EMI = (P * R * Math.pow(1 + R, N)) / 
              (Math.pow(1 + R, N) - 1);

    var totalPayment = EMI * N;
    var totalInterest = totalPayment - P;

    document.getElementById("emiResult").innerHTML =
        "Monthly EMI: ₹ " + EMI.toFixed(2);

    document.getElementById("totalPayment").innerHTML =
        "Total Payment: ₹ " + totalPayment.toFixed(2);

    document.getElementById("totalInterest").innerHTML =
        "Total Interest Payable: ₹ " + totalInterest.toFixed(2);
}

function resetFields(){
    document.getElementById("loan").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("years").value = "";

    document.getElementById("emiResult").innerHTML = "";
    document.getElementById("totalPayment").innerHTML = "";
    document.getElementById("totalInterest").innerHTML = "";
}