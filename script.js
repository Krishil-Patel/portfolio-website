const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

function updateNav(){
  if(nav) nav.classList.toggle("scrolled", window.scrollY > 24);
}
updateNav();
window.addEventListener("scroll", updateNav, {passive:true});

if(menuBtn && navLinks){
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded","false");
    });
  });
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if(!reduceMotion && "IntersectionObserver" in window){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.12, rootMargin:"0px 0px -6% 0px"});

  document.querySelectorAll("[data-reveal]").forEach(el => observer.observe(el));
}else{
  document.querySelectorAll("[data-reveal]").forEach(el => el.classList.add("visible"));
}

const year = document.getElementById("year");
if(year) year.textContent = new Date().getFullYear();