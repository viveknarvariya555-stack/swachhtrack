document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!role || !email || !password) {
        alert("⚠️ Please fill all fields");
        return;
    }

    console.log("Login attempt:", { role, email, password });

    if (role === "admin") {
        window.location.href = "admin-dashboard.html";
    } else if (role === "citizen") {
        window.location.href = "citizen-home.html";
    } else if (role === "driver") {
        window.location.href = "driver-home.html";
    }
});