const nav=document.querySelector('nav'),toggle=document.querySelector('.menu-toggle');
toggle.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const filters=document.querySelectorAll('.filter'), cards=document.querySelectorAll('.project-card');
filters.forEach(btn=>btn.addEventListener('click',()=>{
  filters.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
  const filter=btn.dataset.filter;
  cards.forEach(card=>{card.style.display=(filter==='all'||card.dataset.category===filter)?'':'none'});
}));

const lightbox=document.querySelector('.lightbox'), lbImg=lightbox.querySelector('img'), lbTitle=lightbox.querySelector('h3'), lbCat=lightbox.querySelector('p');
document.querySelectorAll('.project-image').forEach(btn=>btn.addEventListener('click',()=>{
  lbImg.src=btn.dataset.image; lbImg.alt=btn.dataset.title; lbTitle.textContent=btn.dataset.title; lbCat.textContent=btn.dataset.category;
  lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden','false');
}));
function closeBox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lbImg.src=''}
lightbox.addEventListener('click',e=>{if(e.target===lightbox||e.target.classList.contains('close'))closeBox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBox()});

// FUTURE VIDEO SECTION:
// Add files to /videos and create video cards here when you're ready.
// Example: {src:'videos/project-demo.mp4', title:'Project Demo', category:'Motion Graphics'}
