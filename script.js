// =============================
// ARTCRAFT PORTFOLIO JAVASCRIPT
// =============================


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

  navLinks.classList.toggle("show");

  const isOpen = navLinks.classList.contains("show");

  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.textContent = isOpen ? "✕" : "☰";

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function(link) {

  link.addEventListener("click", function() {

    navLinks.classList.remove("show");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.textContent = "☰";

  });

});


// PORTFOLIO FILTER

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    // Remove active class from all buttons

    filterButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    // Activate selected button

    button.classList.add("active");

    // Get selected category

    const selectedFilter = button.dataset.filter;

    // Filter project cards

    projectCards.forEach(function(card) {

      const category = card.dataset.category;

      if (
        selectedFilter === "all" ||
        selectedFilter === category
      ) {

        card.classList.remove("hide");

      } else {

        card.classList.add("hide");

      }

    });

  });

});


// AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// CONSOLE MESSAGE

console.log("ARTCRAFT Portfolio Loaded Successfully!");