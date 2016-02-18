function filterRange(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        if (value < a || value > b) {
            arr.splice(i--, 1);
        }
    }
}
var arr = [5, 3, 0, -2, 8];
filterRange(arr, 3, 8);
console.log(arr);
