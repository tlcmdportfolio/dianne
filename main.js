// =========================
// Swiper Sliders
// =========================
// First Swiper: right, stops at last
var worksSwiper1 = new Swiper(".works-swiper-1", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,              // stop at last
  autoplay: {
    delay: 5000,            // 5 seconds
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    1024: { slidesPerView: 3 },
    768:  { slidesPerView: 2 },
    480:  { slidesPerView: 1 }
  }
});

// Second Swiper: start from last, swipe left, stop at first
var worksSwiper2 = new Swiper(".works-swiper-2", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,             // stop at first
  initialSlide: 4,         // index of last slide (0-based)
  autoplay: {
    delay: 5000,
    reverseDirection: true, // swipe left
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    1024: { slidesPerView: 3 },
    768:  { slidesPerView: 2 },
    480:  { slidesPerView: 1 }
  }
});

// =========================
// Lightbox
// =========================
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);
const lightboxImg = document.createElement('img');
lightbox.appendChild(lightboxImg);
lightbox.addEventListener('click', e=>{if(e.target!==lightboxImg) lightbox.classList.remove('active');});
document.querySelectorAll('.work-card img').forEach(img=>{
  img.addEventListener('click', ()=>{
    lightbox.classList.add('active');
    lightboxImg.src = img.src;
  });
});


// =========================
// Scroll Reveal
// =========================
function revealOnScroll(){
  document.querySelectorAll('.reveal').forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100) el.classList.add('active');
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===========================
// Preloader
// ===========================
window.addEventListener('load', ()=>{
  const preloader = document.getElementById('preloader');
  if(preloader){ preloader.style.opacity='0'; setTimeout(()=>preloader.style.display='none',500); }
  document.body.classList.add('loaded');
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Animate once
        }
      });
    },
    { threshold: 0.1 } // trigger when 10% of section is visible
  );

  sections.forEach(section => {
    observer.observe(section);
  });
});
