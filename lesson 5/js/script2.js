var menu = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function isNumeric(n) {
    return !isNaN(n) && isFinite(n);
}
function multiplyNumeric(obj) {
    for (var key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
alert( "width=" + menu.width + " height=" + menu.height + " title=" + menu.title );
