function changeMenu() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}


const button = document.querySelector("#iButton")

function feedCat() {
    document.getElementById('iImg').src = 'images/mniam.jpg';

    var el = document.getElementById('center');
    el.remove();
}

function onCat() {
    document.getElementById('iImg').src = 'images/feedme.jpg';
}

function offCat() {
    document.getElementById('iImg').src = 'images/feeded.jpg';
}

button.addEventListener('click', feedCat)
button.addEventListener('mouseenter', onCat)
button.addEventListener('mouseleave', offCat)
