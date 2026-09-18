let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function updateUI() {

    let list = document.getElementById("expenseList");
    list.innerHTML = "";

    let total = 0;

    expenses.forEach((exp, index) => {

        total += exp.amount;

        let li = document.createElement("li");

        li.innerHTML = `
            ${exp.category} - INR ${exp.amount}
            <button onclick="deleteExpense(${index})"></button>
        `;

        list.appendChild(li);
    });

    document.getElementById("total").innerText =
        "Total Expense: INR " + total;

    localStorage.setItem("expenses", JSON.stringify(expenses));
}

/* ADD EXPENSE */
document.getElementById("addExpense").onclick = function () {

    let amount = parseFloat(document.getElementById("expense").value);
    let category = document.getElementById("category").value;

    if (isNaN(amount) || amount <= 0) {
        alert("Enter valid amount");
        return;
    }

    if (category === "") {
        alert("Select category");
        return;
    }

    expenses.push({ amount, category });

    document.getElementById("expense").value = "";
    document.getElementById("category").value = "";

    updateUI();
};

/* DELETE */
function deleteExpense(index) {
    expenses.splice(index, 1);
    updateUI();
}

/* LOAD ON START */
updateUI();