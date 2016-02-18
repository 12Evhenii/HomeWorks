function showPow(x, n) {
    var number = x;
    for (var i = 1; i < n; i++) {
        number = number * x;
    }
    return number;
}
var x = +prompt("x", "");
var n = +prompt("n", "");
if (n <= 1) {
    alert("Try again");
} else {
    alert(showPow(x, n));
}
