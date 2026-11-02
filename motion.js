(function(){var d=document.documentElement;if(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){return;}
d.classList.add("js-motion");
document.addEventListener("DOMContentLoaded",function(){
var sel="main h2, main h3, main p, main ul, main figure, main .card, main form, .grid > *, .cards > *, article > *";
var els=[].slice.call(document.querySelectorAll(sel));
var first=document.querySelector("main h1, .hero h1, .hero");
els.forEach(function(e){ if(e!==first && !e.closest(".no-reveal")) e.classList.add("reveal"); });
if(!("IntersectionObserver" in window)){els.forEach(function(e){e.classList.add("in");});return;}
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target);}});},{rootMargin:"0px 0px -8% 0px",threshold:0.06});
els.forEach(function(e){io.observe(e);});
setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect(); if(r.top<window.innerHeight) e.classList.add("in");});},60);
});})();
