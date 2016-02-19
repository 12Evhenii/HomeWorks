function showSum(num1, num2) {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum+=arguments[i];
    }
    return (sum);
}
alert(showSum(3,7, 6));
alert(showSum(4,-6,7,10,5));
