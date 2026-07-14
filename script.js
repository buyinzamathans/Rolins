/**
 * Rolins Furniture Kampala - Interactive Enhancements
 * Premium editorial layout transitions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation Bar with Backdrop Filter
  const nav = document.querySelector('.nav');
  const announcement = document.querySelector('.announcement');
  const threshold = announcement ? announcement.offsetHeight : 50;

  window.addEventListener('scroll', () => {
    if (window.scrollY > threshold) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });

  // 2. Animated Counter Intersection Observer
  const counters = document.querySelectorAll('.trust .num');
  
  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    let count = 0;
    const speed = target / 60; // Completes layout counting gracefully

    const updateCount = () => {
      count += speed;
      if (count < target) {
        counter.innerText = Math.floor(count).toLocaleString() + (target === 2400 ? '+' : '');
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target.toLocaleString() + (target === 2400 || target === 140 ? '+' : '');
      }
    };
    updateCount();
  };

  const observerOptions = {
    root: null,
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
});
