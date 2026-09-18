document.addEventListener("DOMContentLoaded", function(){

document
.getElementById("convertBtn")
.addEventListener("click", convert)

})

async function convert(){

var amount =
parseFloat(document.getElementById("amount").value)

var from =
document.getElementById("from").value.trim().toUpperCase()

var to =
document.getElementById("to").value.trim().toUpperCase()

var resultBox =
document.getElementById("conversionResult")

if(isNaN(amount) || amount<=0){

resultBox.innerHTML="Please enter a valid amount."
return

}

if(from=="" || to==""){

resultBox.innerHTML="Enter currency codes (Example: USD, INR)"
return

}

resultBox.innerHTML="Converting..."

try{

var url =
"https://open.er-api.com/v6/latest/"+from

var response = await fetch(url)

var data = await response.json()

if(data.result!="success"){

resultBox.innerHTML="Invalid base currency code."
return

}

var rate = data.rates[to]

if(!rate){

resultBox.innerHTML="Invalid target currency code."
return

}

var converted = amount * rate

resultBox.innerHTML =
amount+" "+from+" = "+converted.toFixed(2)+" "+to

}

catch(error){

resultBox.innerHTML =
"Conversion failed. Check internet connection."

}

}
/* ===== CURRENCY LIST ===== */
const currencies = [
"USD","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD",
"BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD",
"CAD","CDF","CHF","CLF","CLP","CNH","CNY","COP","CRC","CUP","CVE","CZK","DJF",
"DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","FOK","GBP","GEL","GGP",
"GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS",
"IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KID",
"KMF","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL",
"MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD",
"NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG",
"QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLE",
"SLL","SOS","SRD","SSP","STN","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY",
"TTD","TVD","TWD","TZS","UAH","UGX","UYU","UZS","VES","VND","VUV","WST","XAF",
"XCD","XCG","XDR","XOF","XPF","YER","ZAR","ZMW","ZWG","ZWL"
];

function setupAutocomplete(inputId, listId) {

    let input = document.getElementById(inputId);
    let list = document.getElementById(listId);

    input.addEventListener("input", function () {

        let value = input.value.toUpperCase();
        list.innerHTML = "";

        if (value === "") return;

        /* Match anywhere (not just start) */
        let filtered = currencies.filter(c => c.includes(value)).slice(0, 8);

        filtered.forEach(c => {
            let div = document.createElement("div");
            div.innerText = c;

            div.onclick = function () {
                input.value = c;
                list.innerHTML = "";
            };

            list.appendChild(div);
        });
    });

    /* Close dropdown when clicking outside */
    document.addEventListener("click", function (e) {
        if (e.target !== input) {
            list.innerHTML = "";
        }
    });
}

/* INIT */
setupAutocomplete("from", "fromList");
setupAutocomplete("to", "toList");