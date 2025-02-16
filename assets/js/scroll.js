const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = `fadeInUp 0.6s ${entry.target.dataset.delay || '0s'} forwards`;
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
};

window.addEventListener('load', animateOnScroll);
