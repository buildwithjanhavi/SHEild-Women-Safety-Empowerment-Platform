/** Updated JavaScript for SHE❤️ild Website **/

// Intersection Observer for Scroll Animations
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Animated Counters
const usersCount = document.getElementById('usersCount');
const alertsCount = document.getElementById('alertsCount');

let userTarget = 5000;
let alertTarget = 2000;

function animateCounter(el, target) {
    let count = 0;
    const speed = target / 100; 
    const interval = setInterval(() => {
        count += Math.ceil(speed);
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        el.textContent = count;
    }, 30);
}

window.addEventListener('load', () => {
    animateCounter(usersCount, userTarget);
    animateCounter(alertsCount, alertTarget);
});

// Back to Top Button Logic
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showNextTestimonial() {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
}

setInterval(showNextTestimonial, 5000);

// Contact Form Handler
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting SHE❤️ild! We will get back to you soon.');
    form.reset();
});

// Sound Effect for Alerts
const alertSound = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_37f68414f9.mp3?filename=alert-tone-99483.mp3');
function playSound() {
    alertSound.currentTime = 0;
    alertSound.play();
}

// Modal Logic for SOS, Safe Zones, Community Tips
const sosBtn = document.getElementById('sosButton');
const safeZoneBtn = document.getElementById('safeZoneBtn');
const tipsBtn = document.getElementById('tipsBtn');
const sosModal = document.getElementById('sosModal');
const closeModal = document.getElementById('closeModal');

sosBtn.addEventListener('click', () => {
    playSound();
    sosModal.style.display = 'flex';
    sosModal.querySelector('h3').innerText = "🚨 SOS Alert Sent!";
    sosModal.querySelector('p').innerText = "Your emergency alert has been triggered. Help is on the way.";
    let current = parseInt(alertsCount.textContent);
    alertsCount.textContent = current + 1;
});

safeZoneBtn.addEventListener('click', () => {
    playSound();
    sosModal.style.display = 'flex';
    sosModal.querySelector('h3').innerText = "🗺️ Safe Zones Loaded!";
    sosModal.querySelector('p').innerText = "Nearby safe spaces have been marked on your map.";
});

tipsBtn.addEventListener('click', () => {
    playSound();
    sosModal.style.display = 'flex';
    sosModal.querySelector('h3').innerText = "💡 Community Tips Updated!";
    sosModal.querySelector('p').innerText = "Latest verified safety tips are now available.";
});

closeModal.addEventListener('click', () => {
    sosModal.style.display = 'none';
});




