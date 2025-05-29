// script.js - Adds interactivity to the PlantFuel website

document.addEventListener("DOMContentLoaded", () => {
  // Toggle mobile navigation (optional if mobile nav exists)
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".top-nav nav ul");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Simple email form validation (newsletter form)
  const newsletterForm = document.querySelector(".footer input[type='email']");
  const joinButton = document.querySelector(".footer button");

  if (newsletterForm && joinButton) {
    joinButton.addEventListener("click", () => {
      const email = newsletterForm.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
      } else {
        alert("Thanks for subscribing!");
        newsletterForm.value = "";
      }
    });
  }

  // Toggle FAQ answers visibility
  const faqItems = document.querySelectorAll(".faq-item h3");
  faqItems.forEach(item => {
    const arrow = document.createElement("span");
    arrow.textContent = " ▼";
    arrow.style.fontWeight = "normal";
    arrow.style.fontSize = "0.9em";
    item.appendChild(arrow);

    item.addEventListener("click", () => {
      const answer = item.nextElementSibling;
      const isVisible = answer.style.display === "block";
      answer.style.display = isVisible ? "none" : "block";
      arrow.textContent = isVisible ? " ▼" : " ▲";
    });
  });
});
