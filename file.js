 function registerUser(name, email, password) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

     let existingUser = users.find(user => user.email === email);
    if (existingUser) {
        console.log("This mail is already registered!");
        return;
    }

     users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    console.log("log out succuses");
}

 function loginUser() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(user => user.email === email && user.password === password);
    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));

         showUserDetails();
    } else {
        alert("Invalid email or password!");
    }
}
function showUserDetails() {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
        document.getElementById("welcomeMessage").innerText = `Welcome, ${loggedInUser.name}!`;
        document.getElementById("welcomeMessage").style.display = "block";
        document.getElementById("logoutBtn").style.display = "block";
    }
}


 function logoutUser() {
    localStorage.removeItem("loggedInUser");
    console.log("   log out succuses");
}

 registerUser("Ahmed", "ahmed@example.com", "123456");
loginUser("ahmed@example.com", "123456");
logoutUser();
