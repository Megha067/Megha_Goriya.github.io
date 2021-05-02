const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');
let menuClose = selectElement('.nav-link');

// Open/Close menu on .menu-toggle click
menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});
menuClose.addEventListener('click', function () {
  body.classList.remove('open');
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

window.sr = ScrollReveal();

sr.reveal('.animate-left',{
origin:'left',
duration: 1000,
distance:'25rem',
delay:300

});
 
sr.reveal('.animate-right',{
  origin:'right',
  duration: 1000,
  distance:'25rem',
  delay:600
  
  });
   
  sr.reveal('.animate-top',{
    origin:'top',
    duration: 1000,
    distance:'25rem',
    delay:600
    
    });

    sr.reveal('.animate-bottom',{
      origin:'bottom',
      duration: 1000,
      distance:'25rem',
      delay:600
      
      });
       
     
