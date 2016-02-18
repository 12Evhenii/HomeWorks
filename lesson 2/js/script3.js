var userLogin = prompt("Enter your login, please", "");

if (userLogin == 'admin') {
    var password = prompt("Enter your password", "");

    if (password == 'passw0rd') {
        alert("Welcome home!");
    } else if (password == null) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
}
else if(userLogin == null) {
    alert("Canceled");
    } else {
    alert("Access denied");
}

