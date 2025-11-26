/* ================================
   MOBILE NAVIGATION
================================ */
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

if(menuBtn) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    menuBtn.classList.toggle("active");
  });
}

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    menuBtn.classList.remove("active");
  });
});

/* ================================
   ACTIVE MENU HIGHLIGHT
================================ */
const currentPage = window.location.pathname.split("/").pop();
navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

/* ================================
   STICKY HEADER SHADOW
================================ */
const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) header.classList.add("sticky");
  else header.classList.remove("sticky");
});

/* ================================
   SMOOTH SCROLL
================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ================================
   SCROLL ANIMATION
================================ */
const scrollElements = document.querySelectorAll(".reveal");
const scrollReveal = () => {
  scrollElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if(elementTop < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
};
window.addEventListener("scroll", scrollReveal);
scrollReveal();

/* ================================
   BACK TO TOP BUTTON
================================ */
const backTopBtn = document.querySelector(".back-to-top");
if(backTopBtn){
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) backTopBtn.classList.add("show");
    else backTopBtn.classList.remove("show");
  });

  backTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ================================
   PROPERTY FILTER (Services / Properties)
================================ */
const filterBtns = document.querySelectorAll(".filter-btn");
const propertyCards = document.querySelectorAll(".property-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const category = btn.getAttribute("data-filter");

    propertyCards.forEach(card => {
      card.style.display = 
        category === "all" || card.classList.contains(category)
        ? "block" 
        : "none";
    });
  });
});

/* ================================
   CONTACT FORM VALIDATION
================================ */
const contactForm = document.querySelector("#contact-form");
if(contactForm){
  contactForm.addEventListener("submit", (e) => {
    const name = contactForm.querySelector("#name");
    const email = contactForm.querySelector("#email");
    const msg = contactForm.querySelector("#message");

    if(name.value === "" || email.value === "" || msg.value === ""){
      e.preventDefault();
      alert("Please fill in all fields!");
    }
  });
}

/* ================================
   LOADER SCREEN REMOVE AFTER LOAD
================================ */
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  if(loader){
    setTimeout(() => loader.classList.add("hide"), 600);
  }
});
// ===== Scroll to Top Button =====
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addPropertyBtn");
  const popupOverlay = document.getElementById("popupOverlay");
  const closePopup = document.getElementById("closePopup");
  const form = document.getElementById("addPropertyForm");

  // === OPEN POPUP ===
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    popupOverlay.classList.add("active");
  });

  // === CLOSE POPUP (✕ button) ===
  closePopup.addEventListener("click", () => {
    popupOverlay.classList.remove("active");
  });

  // === CLOSE POPUP (click outside box) ===
  popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.classList.remove("active");
    }
  });

  // === SUBMIT FORM (demo only) ===
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Property submitted successfully!");
    popupOverlay.classList.remove("active");
    form.reset();
  });
});

