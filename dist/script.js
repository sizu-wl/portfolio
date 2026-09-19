const seen = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      seen.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.project, .about-grid').forEach((element) => {
  element.classList.add('reveal');
  seen.observe(element);
});
