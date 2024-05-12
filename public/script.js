document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const toggleBtn = document.getElementById('toggle-btn');
    const slider = document.querySelector('.slider');
  
    menuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
  
    toggleBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
    });
  
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
  
    function showSlide(index) {
      slides.forEach(slide => {
        slide.style.transform = `translateX(-${index * 100}%)`;
      });
    }
  
    showSlide(slideIndex);
  
    document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowRight') {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
      } else if (event.key === 'ArrowLeft') {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const nextBtn = document.getElementById('next-btn');
    const slider = document.querySelector('.slidergallery');
    const imageWrappers = document.querySelectorAll('.image-wrapperg');
    
    let currentIndex = 0;
    
    nextBtn.addEventListener('click', function() {
      // Move the slider to the next set of images
      currentIndex += 4;
      if (currentIndex >= imageWrappers.length) {
        currentIndex = 0;
      }
      const translation = -currentIndex * 25; // Translate by 25% for each image
      slider.style.transform = `translateX(${translation}%)`;
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const letters = document.querySelectorAll('.nibras-letter');
  
    letters.forEach(function(letter) {
      const delay = Math.random() * 1000; // Random delay for each letter
      setTimeout(function() {
        letter.style.opacity = '1'; // Show the letter
        letter.style.transform = 'translateY(0)'; // Slide the letter to its final position
      }, delay);
    });
  });
  
  

  
  