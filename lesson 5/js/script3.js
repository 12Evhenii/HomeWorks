var arr = [];
var i = 0;
var sum = 0;
var a= +prompt("A number", "");

while (a != "")
{
    arr[i] = a;
    sum += arr[i];
    i++;
    a= +prompt("A number", "")
}
console.log(sum);
