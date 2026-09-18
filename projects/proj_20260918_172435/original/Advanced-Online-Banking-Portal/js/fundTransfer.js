document.getElementById("transferBtn").addEventListener("click", function () {

    let account = document.getElementById("account").value.trim();
    let name = document.getElementById("name").value.trim();
    let ifsc = document.getElementById("ifsc").value.trim();
    let type = document.getElementById("transferType").value;
    let amount = document.getElementById("amount").value;

    if (!/^[0-9]{8,18}$/.test(account)) {
        alert("Invalid account number");
        return;
    }

    if (name === "") {
        alert("Enter receiver name");
        return;
    }

    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc)) {
        alert("Invalid IFSC code");
        return;
    }

    if (type === "") {
        alert("Select transfer type");
        return;
    }

    if (amount <= 0) {
        alert("Enter valid amount");
        return;
    }
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

/* Create new transaction object */
let newTxn = {
    date: new Date().toLocaleString(),
    name: name,
    account: account,
    amount: amount,
    type: type
};

/* Add to array */
transactions.push(newTxn);

/* Save back */
localStorage.setItem("transactions", JSON.stringify(transactions));

alert("Transfer Successful!");


    document.getElementById("msg").innerText = "Transaction Completed!";
});