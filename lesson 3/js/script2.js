for (var i = 2; i <= 10; i++) {
    var n = true;
    for (var j = 2; j < i; j++) {
        if (i%j == 0) {
            n = false; break;
        }
    }
    if (n) {
        alert(i);
    }
}