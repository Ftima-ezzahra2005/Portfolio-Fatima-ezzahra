/* Scroll Animation */

const cards = document.querySelectorAll(".card");
const skills = document.querySelectorAll(".skill-box");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});

cards.forEach(card => observer.observe(card));
skills.forEach(skill => observer.observe(skill));

document.querySelector(".menu-toggle")
  .addEventListener("click", () => {
    document.querySelector("nav ul")
      .classList.toggle("active");
  });
