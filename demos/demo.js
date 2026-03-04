const yearNodes = document.querySelectorAll("[data-year]");
yearNodes.forEach((n) => {
  n.textContent = String(new Date().getFullYear());
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));