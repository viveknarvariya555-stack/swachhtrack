const roleSelect = document.getElementById("role");
const proofField = document.getElementById("proofField");
const signupForm = document.getElementById("signupForm");

roleSelect.addEventListener("change", function() {
    if (this.value === "driver") {
        proofField.style.display = "block";
    } else {
        proofField.style.display = "none";
    }
});

signupForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const role = document.getElementById("role").value;
    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!role || !mobile || !password || !confirmPassword) {
        alert("⚠️ Please fill all required fields");
        return;
    }

    if (password !== confirmPassword) {
        alert("⚠️ Passwords do not match");
        return;
    }

    // Just logging for now, backend integration later
    console.log("Signup Data:", { role, mobile, password });

    alert("✅ Signup successful! You can now login.");
    window.location.href = "index.html";
});