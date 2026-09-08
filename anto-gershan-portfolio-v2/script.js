document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const target=document.querySelector(a.getAttribute('href'));
  if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}
}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('in-view');});
},{threshold:.08});
document.querySelectorAll('.section,.project-card,.skill-card,.credential,.signal-grid>div,.experience-card').forEach(el=>observer.observe(el));

document.querySelectorAll('.filter').forEach(button=>{
  button.addEventListener('click',()=>{
    document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
    button.classList.add('active');
    const filter=button.dataset.filter;
    document.querySelectorAll('.credential').forEach(card=>{
      card.classList.toggle('hidden',filter!=='all' && card.dataset.category!==filter);
    });
  });
});
