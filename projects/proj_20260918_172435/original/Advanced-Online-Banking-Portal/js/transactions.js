window.onload = function () {

    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    let table = document.getElementById("txnTable");

    transactions.forEach(txn => {

        let row = table.insertRow();

        row.insertCell(0).innerText = txn.date;
        row.insertCell(1).innerText = txn.name;
        row.insertCell(2).innerText = txn.account;
        row.insertCell(3).innerText = txn.type;
        row.insertCell(4).innerText = "INR " + txn.amount;

    });
};