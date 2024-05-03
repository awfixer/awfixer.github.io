document.querySelector(".nav-btn").addEventListener("click", function() {
    window.open("download.html", "_blank");
     
});



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