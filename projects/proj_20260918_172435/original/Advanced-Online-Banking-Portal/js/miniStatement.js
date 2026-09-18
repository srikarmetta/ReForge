document.getElementById("generate").addEventListener("click", function () {

    let data = JSON.parse(localStorage.getItem("transactions")) || [];
    let last5 = data.slice(-5).reverse(); // latest first

    let list = document.getElementById("list");
    list.innerHTML = "";

    if (last5.length === 0) {
        list.innerHTML = "<li>No transactions found</li>";
        return;
    }

    last5.forEach(function (t) {

        let typeClass = t.amount > 0 ? "credit" : "debit";

        list.innerHTML += `
            <li class="txn-item ${typeClass}">
                <span>${t.date}</span>
                <span>INR ${t.amount}</span>
            </li>
        `;
    });

});