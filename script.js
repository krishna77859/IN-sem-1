
function register() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim().toLowerCase();
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (!name || !email || !password || !confirm) {
        showMessage("Please fill all fields", "red");
        return;
    }

    if (password !== confirm) {
        showMessage("Passwords do not match", "red");
        return;
    }

    let users = JSON.parse(localStorage.getItem("students")) || [];

    if (users.some(user => user.email === email)) {
        showMessage("Email already registered", "red");
        return;
    }

    users.push({ name, email, password });

    localStorage.setItem("students", JSON.stringify(users));

    showMessage("Registration successful!", "green");
}

function login() {
    let email = document.getElementById("loginEmail").value.trim().toLowerCase();
    let password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("students")) || [];

    let user = users.find(
        user => user.email === email && user.password === password
    );

    if (user) {
        showMessage("Login successful! Welcome " + user.name, "green");
    } else {
        showMessage("Invalid email or password", "red");
    }
}

function showMessage(message, color) {
    let msg = document.getElementById("message");
    msg.textContent = message;
    msg.style.color = color;
}

