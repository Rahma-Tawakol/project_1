// --> Menu buttons
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');

menuBtn.addEventListener('click', () => {
  menu.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('show');
});

// --> Submenu toggle
const submenuToggle = document.querySelector('.has-submenu');
const submenu = document.querySelector('.submenu');
const arrowIcon = submenuToggle.querySelector('.toggle-submenu');

submenuToggle.addEventListener('click', () => {
  submenu.classList.toggle('show');
  if (submenu.classList.contains('show')) {
    arrowIcon.classList.remove('fa-angle-down');
    arrowIcon.classList.add('fa-angle-up');
  } else {
    arrowIcon.classList.remove('fa-angle-up');
    arrowIcon.classList.add('fa-angle-down');
  }
});

// --> Product row animation
const cards = document.querySelectorAll('.product-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  observer.observe(card);
});

// --> Scroll bar 
let progress = 10; // --> Always start at 10%
const thumb = document.getElementById('scrollThumb');

function moveScroll(direction) {
  progress += direction * 10;
  progress = Math.max(0, Math.min(progress, 100));
  thumb.style.width = progress + '%';
}

// --> Scroll to top
const topBtn = document.querySelector(".topBtn");
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// --> Remove round corners from header when scrolling
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// --> Change favorite icon on click
document.querySelectorAll('.wishlist-icon i').forEach(icon => {
  icon.addEventListener('click', () => {
    if (icon.classList.contains('fa-regular')) {
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');
    } else {
      icon.classList.remove('fa-solid');
      icon.classList.add('fa-regular');
    }
  });
});


// --> Make scroll bars work for product rows
document.querySelectorAll(".scroll-nav").forEach((nav, index) => {
  const row = document.querySelectorAll(".product-row, .product-row1")[index];
  const leftBtn = nav.querySelector(".nav-btn:first-child");
  const rightBtn = nav.querySelector(".nav-btn:last-child");
  const thumb = nav.querySelector(".scroll-thumb");

  leftBtn.addEventListener("click", () => {
    row.scrollBy({ left: -300, behavior: "smooth" });
  });
  rightBtn.addEventListener("click", () => {
    row.scrollBy({ left: 300, behavior: "smooth" });
  });

  // --> Update position
  row.addEventListener("scroll", () => {
    const scrollPercent = row.scrollLeft / (row.scrollWidth - row.clientWidth);
    thumb.style.width = `${Math.max(10, scrollPercent * 100)}%`;
  });
});
