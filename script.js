// Navbar scroll behavior
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Menu mobile toggle
document.getElementById('menuButton').addEventListener('click', function() {
  document.getElementById('mobileMenu').classList.toggle('active');
});

// Os scripts existentes continuam aqui...

// Animação dos valores nas métricas
document.addEventListener('DOMContentLoaded', function() {
  const metricValues = document.querySelectorAll('.metric-value');
  
  metricValues.forEach(metric => {
    const finalValue = parseInt(metric.getAttribute('data-value'));
    let currentValue = 0;
    
    const incrementValue = () => {
      if (currentValue < finalValue) {
        currentValue += Math.ceil(finalValue / 50);
        if (currentValue > finalValue) currentValue = finalValue;
        metric.textContent = currentValue;
        requestAnimationFrame(incrementValue);
      }
    };
    
    incrementValue();
  });

  // Carousel de testimonials
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  const totalTestimonials = testimonials.length;
  
  setInterval(() => {
    testimonials.forEach(t => t.style.opacity = '0');
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    testimonials[currentTestimonial].style.opacity = '1';
  }, 5000);
});