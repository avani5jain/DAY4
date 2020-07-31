var c = 0;

function bigger() {
    var a = document.getElementById('number1').value;
    for (let i = 0; i < Number; i++) {
        c++;
        var box = document.createElement("button");
        box.id = 'box1';
        box.innerHTML = "new button" + c;
        document.body.appendChild(box);
    }


}