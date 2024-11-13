document.getElementById('downloadBtn').addEventListener('click', function() {
    alert('Redirecting to the Amazon Appstore...');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    alert('Thank you for your message! We will get back to you soon.');
});

// Function to handle card visibility on scroll
const cards = document.querySelectorAll('.card');

const handleScroll = () => {
   const windowHeight = window.innerHeight;

   cards.forEach((card) => {
       const rect = card.getBoundingClientRect();
       if (rect.top < windowHeight && rect.bottom > 0) {
           // If card is in view, add 'visible' class
           card.classList.add('visible');
       } else {
           // If card is out of view, remove 'visible' class
           card.classList.remove('visible');
       }
   });
};

// Initial check on page load
handleScroll();

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Download button alert
document.getElementById('downloadBtn').addEventListener('click', function() {
   alert('Redirecting to the Amazon Appstore...');
});