var c = 0;

function bigger() {
    var a = document.getElementById('number1').value;
    var color = document.getElementById('clr').value;
    a = Number(a);

    for (let i = 0; i < a; i++) {
        c++;
        var box = document.createElement("button");
        box.id = 'box1';
        box.innerHTML = "new button" + c;
        box.style = "background-color:" + (color) + ";"
        document.body.appendChild(box);
    }


}