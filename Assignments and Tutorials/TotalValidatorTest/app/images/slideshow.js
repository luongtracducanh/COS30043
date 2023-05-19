/* Slide show */
var slideIndex = 0;
var slideTimeout;
showAutoSlides();

function plusSlides(n) {
  clearTimeout(slideTimeout);
  showSlides(slideIndex += n);
}

function currentKeySlide(e, n) {
  if (e.key == "Enter") currentSlide(n);
}

function currentSlide(n) {
  clearTimeout(slideTimeout);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* Auto bit */
function showAutoSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    slideTimeout = setTimeout(showAutoSlides, 4000); // Change image every 4 seconds
}
