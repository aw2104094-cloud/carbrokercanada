/* ========== SHARED JS — CarBrokerCanada Landing Pages ========== */

// ===== NAVIGATION =====
function toggleNav() {
  document.getElementById("navLinks").classList.toggle("open");
  document.getElementById("hamburger").classList.toggle("active");
}
function closeNav() {
  document.getElementById("navLinks").classList.remove("open");
  document.getElementById("hamburger").classList.remove("active");
}

// Navbar scroll effect
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }
});

// ===== FADE-IN ANIMATIONS =====
var fadeObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
);

document.querySelectorAll(".fade-in").forEach(function (el) {
  fadeObserver.observe(el);
});

// ===== FAQ ACCORDION =====
function toggleFAQ(btn) {
  var item = btn.parentElement;
  var wasOpen = item.classList.contains("open");
  document.querySelectorAll(".faq-item").forEach(function (i) {
    i.classList.remove("open");
  });
  if (!wasOpen) item.classList.add("open");
}
