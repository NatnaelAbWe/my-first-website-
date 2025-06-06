document.addEventListener("DOMContentLoaded", () => {
  // Navigation toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".top-nav nav ul");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // FAQ toggle
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

  // Newsletter email validation
  const newsletterForm = document.querySelector(".footer input[type='email']");
  const joinButton = document.querySelector(".footer button");

  if (newsletterForm && joinButton) {
    joinButton.addEventListener("click", () => {
      const email = newsletterForm.value.trim();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
      } else {
        alert("Thanks for subscribing!");
        newsletterForm.value = "";
      }
    });
  }
});
