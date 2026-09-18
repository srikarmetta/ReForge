/* ===== LOAD DATA ===== */
window.onload = function () {
    let data = JSON.parse(localStorage.getItem("profileData"));

    if (data) {
        for (let key in data) {
            if (document.getElementById(key)) {
                document.getElementById(key).value = data[key];
            }
        }
    }
};

/* ===== FORM SUBMIT ===== */
document.getElementById("profileForm").addEventListener("submit", function(e) {
    e.preventDefault();

    function getVal(id) {
        return document.getElementById(id).value.trim();
    }

    let formData = {
        name: getVal("name"),
        dob: getVal("dob"),
        gender: getVal("gender"),
        email: getVal("email"),
        phone: getVal("phone"),
        altPhone: getVal("altPhone"),
        address: getVal("address"),
        city: getVal("city"),
        state: getVal("state"),
        pincode: getVal("pincode"),
        account: getVal("account"),
        ifsc: getVal("ifsc"),
        accountType: getVal("accountType"),
        aadhaar: getVal("aadhaar"),
        pan: getVal("pan")
    };

    /* ===== VALIDATION (ALERTS) ===== */

    if (formData.name === "") {
        alert("Name is required");
        return;
    }

    if (formData.dob === "") {
        alert("Date of Birth is required");
        return;
    }

    if (formData.gender === "") {
        alert("Please select gender");
        return;
    }

    if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(formData.email)) {
        alert("Enter valid email");
        return;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
        alert("Enter valid 10-digit phone number");
        return;
    }

    if (formData.altPhone !== "" && !/^[0-9]{10}$/.test(formData.altPhone)) {
        alert("Invalid alternate phone number");
        return;
    }

    if (formData.address === "") {
        alert("Address is required");
        return;
    }

    if (formData.city === "") {
        alert("City is required");
        return;
    }

    if (formData.state === "") {
        alert("State is required");
        return;
    }

    if (!/^[0-9]{6}$/.test(formData.pincode)) {
        alert("Enter valid 6-digit pincode");
        return;
    }

    if (!/^[0-9]{8,18}$/.test(formData.account)) {
        alert("Invalid account number");
        return;
    }

    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(formData.ifsc)) {
        alert("Invalid IFSC code");
        return;
    }

    if (formData.accountType === "") {
        alert("Select account type");
        return;
    }

    if (!/^[0-9]{12}$/.test(formData.aadhaar)) {
        alert("Invalid Aadhaar number");
        return;
    }

    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan)) {
        alert("Invalid PAN number");
        return;
    }
	/* ===== RADIO VALIDATION ===== */
let marital = document.querySelector('input[name="marital"]:checked');
if (!marital) {
    alert("Please select marital status");
    return;
}

/* ===== CHECKBOX VALIDATION ===== */
let services = document.querySelectorAll('input[name="services"]:checked');
if (services.length === 0) {
    alert("Select at least one service");
    return;
}

    /* ===== SAVE ===== */
    localStorage.setItem("profileData", JSON.stringify(formData));

    alert("Profile saved successfully!");
});

/* ===== RESET ===== */
document.getElementById("profileForm").addEventListener("reset", function() {
    setTimeout(() => {
        localStorage.removeItem("profileData");
        alert("Data cleared!");
    }, 100);
});