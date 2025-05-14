// Show welcome alert on first visit
window.addEventListener('DOMContentLoaded', () => {
  alert("Welcome to Jiajiri — Empowering Youth for the Future of Work!");
});

// Set current year dynamically in the footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}


