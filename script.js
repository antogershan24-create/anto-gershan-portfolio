const $$=(s)=>document.querySelectorAll(s);

$$('.filters button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    $$('.filters button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter=btn.dataset.filter;
    $$('.vault-card').forEach(card=>{
      card.classList.toggle('hidden',filter!=='all' && card.dataset.category!==filter);
    });
  });
});

const sections=[...document.querySelectorAll('main section[id]')];
const navLinks=[...document.querySelectorAll('.rail nav a')];
const io=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));
    }
  });
},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>io.observe(s));

const reveal=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('seen')});
},{threshold:.08});
$$('.module,.build,.vault-card,.field-card,.dossier,.arsenal,.signal-list>div').forEach(el=>reveal.observe(el));
