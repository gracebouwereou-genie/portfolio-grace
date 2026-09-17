const elements = document.querySelectorAll(
  ".skill-card, .project-card, .goal-card, .timeline-content, .card"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));