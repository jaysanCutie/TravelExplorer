// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Add to your existing script.js
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        if (emailInput.value) {
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        }
    });
}

// Simple Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.destination-card, .package-card, .testimonial-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animation
document.querySelectorAll('.destination-card, .package-card, .testimonial-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Add this to your script.js file
document.addEventListener('DOMContentLoaded', function() {
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('destinationSearch');
  const searchResults = document.getElementById('searchResults');

  // Sample destination data (replace with your actual data)
  const destinations = [
    { name: "Paris, France", description: "The city of lights and love with iconic eiffel tower.", url: "#paris" },
    { name: "Tokyo, Japan", description: "Vibrant metropolis blending tradition and modernity", url: "#tokyo" },
    { name: "Bangkok, Thailand", description: "A sensory overload of temples, street food, and floating markets.", url: "#bangkok" },
    { name: "Bali, Indonesia", description: "Tropical paradise with beautiful beaches", url: "#bali" },
    { name: "Barcelona, Spain", description: "A vibrant city where Gothic architecture meets beachside bliss.", url: "#barcelona" },
    { name: "Alps, Switzerland", description: "Alpine wonderland of chocolate, cheese, and breathtaking landscapes.", url: "#alps" }
  ];

  // Search function
  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';
    
    if (searchTerm.length < 2) {
      searchResults.style.display = 'none';
      return;
    }

    const filteredDestinations = destinations.filter(destination => 
      destination.name.toLowerCase().includes(searchTerm) || 
      destination.description.toLowerCase().includes(searchTerm)
    );

    if (filteredDestinations.length > 0) {
      filteredDestinations.forEach(destination => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
          <h3>${destination.name}</h3>
          <p>${destination.description}</p>
        `;
        resultItem.addEventListener('click', () => {
          window.location.href = destination.url;
        });
        searchResults.appendChild(resultItem);
      });
      searchResults.style.display = 'block';
    } else {
      searchResults.innerHTML = '<div class="search-result-item">No destinations found</div>';
      searchResults.style.display = 'block';
    }
  }

  // Event listeners
  searchBtn.addEventListener('click', performSearch);
  searchInput.addEventListener('input', performSearch);
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });

  // Close results when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) {
      searchResults.style.display = 'none';
    }
  });
});