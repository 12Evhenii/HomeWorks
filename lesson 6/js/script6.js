function isPol(str) {
    var strLen = str.length;
    for (var i = 0; i < strLen/2; i++) {
        if (str.charAt(i) != str.charAt(strLen - 1 - i)) {
            return false;
        }
    }
    return true;
}
alert(isPol('abba'));