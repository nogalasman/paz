function sendForm() {
    document.getElementById("contact-form").className = "was-submitted";
}

function changeImage() {
    var img = document.getElementById("slide-img");

    img.src = images[x];
    x++;
    if (x >= images.length) {
        x = 0;
    }
    setTimeout("changeImage()", 5000);
}

var images = [],
    x = 0;
images[0] = "images/250X110571325734.jpg";
images[1] = "images/banner_atar.jpg";
images[2] = "images/paz_250x110103131473.jpg";
images[3] = "images/250X110668568400.jpg";
setTimeout("changeImage()", 0);