for (var i = 1; i <= 8; i++) {
    for (var j = 1; j <= 8; j++) {
        if (i%2 != 0)
        {
            if (j%2 != 0) document.write(" ");
            else document.write("#");
        }
        else
        {
            if (j%2 != 0) document.write(" ");
            else document.write(" #");
        }
    }
    document.write("<br>");
}
