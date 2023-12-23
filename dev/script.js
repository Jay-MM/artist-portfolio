// Global variables for selectors
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbar = document.getElementById("myNavbar");

function closeNavbar() {
  // Close the navbar by triggering a click on the toggler button
  if (navbarToggler.getAttribute('aria-expanded') === 'true') {
    navbarToggler.click();
  }
}

function addClickEventListeners() {
  // Add click event listeners to each navbar link
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeNavbar);
  });
}

function handleScroll() {
  const scrollThreshold = 639;
  const scrollPosition = window.scrollY;

  // Change background color when scrolling down
  if (scrollPosition > scrollThreshold) {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.876)";
  } else {
    // Change background color back to transparent when scrolling up
    navbar.style.backgroundColor = "transparent";
  }
}
function navbarFn() {
  addClickEventListeners();
  window.addEventListener("scroll", handleScroll);
}



// Call the functions
document.addEventListener("DOMContentLoaded", navbarFn);