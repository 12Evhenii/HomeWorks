var arr = [1, 2, 3, 4, 5];

function showRandom(num1, num2) {
    return Math.random();
}
arr.sort(showRandom);
console.log(arr);
