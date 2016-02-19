var obj = {
    className: 'open menu koko koko'
};
function removeClass(obj, cls) {
    var classes = obj.className.split(" ");

    for (i = 0; i < classes.length; i++) {
        if (classes[i] == cls) {
            classes.splice(i, 1);
            i--;
        }
    }
    obj.className = classes.join(" ");
}
removeClass(obj, 'koko');
console.log(obj.className);
