
var i = 0; //start point
var images = [];
var time = 3000;

//image list
images[0] = 'img/image1.jpg';
images[1] = 'img/image2.jpg';
images[2] = 'img/image3.jpg';

//change Image
function changeImg() {
    document.getElementById("slide").src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    } return

    setTimeout("changeImg()", time);
}

window.onload = changeImg;


