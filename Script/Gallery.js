



// JavaScript to scroll to section
document.addEventListener("DOMContentLoaded", function() {
  const scrollLinks = document.querySelectorAll('.go-commun');
  scrollLinks.forEach(function(scrollLink) {
      scrollLink.addEventListener("click", function(event) {
          event.preventDefault(); // Prevent default anchor behavior
          
          const targetSections = document.querySelectorAll(".icon-cy");
          
          targetSections.forEach(targetSection => {
              targetSection.scrollIntoView({ behavior: 'smooth' });
              targetSection.classList.add('flashing');
              
              setTimeout(() => {
                  targetSection.classList.remove('flashing');
              }, 10000); 
          }); 
      });
  });
});




/* Download button */ 

document.querySelector(".nav-btn").addEventListener("click", function() {
  window.open("download.html", "_blank");
   
});




  /* Div Slider */

  $(document).ready(function() {
    const slides = $('.slide');
    const bulletContainer = $('.slider-bullets');
    const prevArrow = $('.prev-arrow');
    const nextArrow = $('.next-arrow');
    const slideWidth = slides.first().width();
    let currentSlide = 0;

    // Create bullets
    slides.each(function(index) {
      bulletContainer.append(`<div class="bullet" data-index="${index}"></div>`);
    });

    const bullets = $('.bullet');

    // Initialize active bullet
    bullets.eq(currentSlide).addClass('active');

    // Function to move to a specific slide
    function goToSlide(index) {
      if (index >= 0 && index < slides.length) {
        $('.slider').css('transform', `translateX(-${index * slideWidth}px)`);
        currentSlide = index;
        bullets.removeClass('active');
        bullets.eq(currentSlide).addClass('active');
      }
    }

    // Event listeners for bullets
    bullets.on('click', function() {
      const index = $(this).data('index');
      goToSlide(index);
    });

    // Event listener for previous arrow
    prevArrow.on('click', function() {
      goToSlide(currentSlide - 1);
    });

    // Event listener for next arrow
    nextArrow.on('click', function() {
      goToSlide(currentSlide + 1);
    });
  });






/* Photo Slider */
  
$(document).ready(function(){
    var currentIndex = 0;
    var slides = $('.custom-slides img');
    var totalSlides = slides.length;
    $('.custom-next').click(function(){
      goToSlide(currentIndex + 1);
    });
  
    $('.custom-prev').click(function(){
      goToSlide(currentIndex - 1);
    });
  
    function goToSlide(index) {
      if (index < 0) {
        index = totalSlides - 1;
      } else if (index >= totalSlides) {
        index = 0;
      }
      slides.hide();
      slides.eq(index).fadeIn();
      currentIndex = index;
    }
  });


  
  $(document).ready(function(){
    var currentIndex_2 = 0;
    var slides = $('.custom-slides-2 img');
    var totalSlides = slides.length;
    $('.custom-next-2').click(function(){
      goToSlide(currentIndex_2 + 1);
    });
  
    $('.custom-prev-2').click(function(){
      goToSlide(currentIndex_2 - 1);
    });
  
    function goToSlide(index) {
      if (index < 0) {
        index = totalSlides - 1;
      } else if (index >= totalSlides) {
        index = 0;
      }
      slides.hide();
      slides.eq(index).fadeIn();
      currentIndex_2 = index;
    }
  });
  