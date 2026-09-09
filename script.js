document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('.section,.project,.skill-grid article,.credential-grid article,.achievement-grid>div').forEach(e=>observer.observe(e));
/* =========================================
   CREDENTIAL FILTER
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

  const filters = document.querySelectorAll(".credential-filter");
  const cards = document.querySelectorAll(".credential-card");

  filters.forEach(filter => {

    filter.addEventListener("click", () => {

      const selected = filter.dataset.filter;

      filters.forEach(button => {
        button.classList.remove("active");
      });

      filter.classList.add("active");

      cards.forEach(card => {

        const category = card.dataset.category;

        if (selected === "all" || category === selected) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }

      });

    });

  });

});