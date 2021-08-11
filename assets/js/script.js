/* Author: 

*/

var imgSrc = ['./images/pic1.jpg','./images/pic2.jpg','./images/pic3.jpg','./images/pic4.jpg','./images/pic5.jpg','./images/pic6.jpg',
              './images/pic7.jpg','./images/pic8.jpg','./images/pic9.jpg','./images/pic10.jpg'];
var imgIndex = 0;
var image;

function imgChange() {
    setInterval(nextImage, 1000);
    console.log(imgChange);
}


function nextImage() {
    image.src = imgSrc[imgIndex];
    if(imgIndex === (imgSrc.length - 1)) {
        imgIndex = 0;
    } else {
        imgIndex = imgIndex + 1;
    }
}

// window.onload = function() {
//     image = document.querySelector('.bannerImg');
//     imgChange();
//     console.log(onload);    
// }

window.onload = function(){
    console.log
    imgChange();
}

image = document.querySelector('.bannerImg');
window.addEventListener('load', imgChange);





















