const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevArrow = document.querySelector(".arrow.left");
const nextArrow = document.querySelector(".arrow.right");

let currentIndex = 0; // Track the current slide
let interval;

// Function to show the current slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index); // Add/remove 'active' class
    dots[i].classList.toggle("active", i === index); // Update pagination dots
  });
}

// Move to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length; // Go to the next slide, loop back if at the end
  showSlide(currentIndex);
}

// Move to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Go to the previous slide, loop back if at the start
  showSlide(currentIndex);
}

// Manual navigation using arrows
nextArrow.addEventListener("click", () => {
  clearInterval(interval); // Stop automatic slide
  nextSlide();
  startAutoSlide(); // Restart automatic slide
});
prevArrow.addEventListener("click", () => {
  clearInterval(interval); // Stop automatic slide
  prevSlide();
  startAutoSlide(); // Restart automatic slide
});

// Pagination dots navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearInterval(interval); // Stop automatic slide
    currentIndex = index; // Set the current slide to the clicked dot
    showSlide(currentIndex);
    startAutoSlide(); // Restart automatic slide
  });
});

// Automatic slide transition
function startAutoSlide() {
  interval = setInterval(nextSlide, 5000); // Automatically switch slides every 3 seconds
}

// Initialize slider
showSlide(currentIndex); // Display the first slide
startAutoSlide(); // Start automatic sliding
