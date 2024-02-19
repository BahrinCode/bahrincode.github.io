var slideIndex_package = 0;
showSlidesPackage();

var slideIndex = 0;
showSlides();

function showSlidesPackage(){
  var x;
  var slides_package = document.getElementsByClassName("mySlides__package");
  for (x = 0; x < slides_package.length; x++){
    slides_package[x].style.display = "none";
  }
  slideIndex_package++;
  if(slideIndex_package > slides_package.length) {slideIndex_package = 1}
  slides_package[slideIndex_package-1].style.display = "block";
  setTimeout(showSlidesPackage, 2000);
}



var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

