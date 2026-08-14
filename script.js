const menu=document.querySelector('.menu');
const links=document.querySelector('.nav-links');

menu.addEventListener('click',()=>{
  const open=links.classList.toggle('active');
  menu.setAttribute('aria-expanded',open);
});

document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>{
    links.classList.remove('active');
    menu.setAttribute('aria-expanded','false');
  });
});