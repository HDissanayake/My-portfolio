
// Typing animation effect
// =========================
const roles = ["Frontend Developer","Software Developer"];
let roleIndex = 0;
let charIndex = 0;

function typeEffect() {
  const currentRole = roles[roleIndex];
  const typingElement = document.getElementById("typing");

  if (charIndex < currentRole.length) {
    typingElement.textContent = currentRole.slice(0, ++charIndex);
    setTimeout(typeEffect, 100); // typing speed
  } else {
    setTimeout(() => {
      charIndex = 0;
      roleIndex = (roleIndex + 1) % roles.length;
      typingElement.textContent = "";
      typeEffect();
    }, 1500); // wait before switching role
  }
}
typeEffect();

// Contact Form Handle
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector("input[type='text']").value.trim();
    const email = this.querySelector("input[type='email']").value.trim();
    const message = this.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    // ✅ Simulate form submission (replace with backend API call)
    alert(`✅ Thank you, ${name}! Your message has been sent.`);

    this.reset();
  });
}


// =========================
// Responsive Hamburger Menu
// =========================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });
}

// Optional: Close menu when clicking a link (better UX on mobile)
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("open");
  });
});
