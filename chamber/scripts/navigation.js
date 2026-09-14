// Store the selected elements that will be used
const navButton = document.querySelector("#ham-btn");
const navLinks = document.querySelector("#nav-bar");

// Toggle the show class off on
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
})