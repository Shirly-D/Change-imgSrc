/* Author: 

*/

var imgSrc = ['assets/images/pic1.jpg','assets/images/pic2.jpg','assets/images/pic3.jpg','assets/images/pic4.jpg','assets/images/pic5.jpg','assets/images/pic6.jpg',
              'assets/images/pic7.jpg','assets/images/pic8.jpg','assets/images/pic9.jpg','assets/images/pic10.jpg'];
var imgIndex = 0;
var image;

function imgChange() {
    setInterval(nextImage, 1000);
}

function nextImage() {
    image.src = imgSrc[imgIndex];
    if(imgIndex === (imgSrc.length - 1)) {
        imgIndex = 0;
    } else {
        imgIndex = imgIndex + 1;
    }
}
image = document.querySelector('.bannerImg');
window.addEventListener('load', imgChange);

function time() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    document.querySelector('.time').textContent = time;
}

var digitalClock = setInterval(time, 1000);





















