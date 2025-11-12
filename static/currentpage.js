document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop(); // Get current file name
  const navLinks = document.querySelectorAll(".navbar .nav-link"); // Select all nav links

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");

    // Check if the link's href matches the current path
    if (linkPath === currentPath) {
      link.classList.add("active"); // Add the 'active' class
    } else {
      link.classList.remove("active"); // Ensure others don't have 'active'
    }
  });
});


// Details Card Button on hover
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
      const detailsButton = card.querySelector('.details-btn');
      detailsButton.style.display = 'none'; // Initially hidden

      card.addEventListener('mouseover', () => {
          detailsButton.style.display = 'block'; // Show button on hover
      });

      card.addEventListener('mouseout', () => {
          detailsButton.style.display = 'none'; // Hide button on mouse leave
      });
  });
});

// Current Page Footer
document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
});
