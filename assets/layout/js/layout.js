const menuToggle = document.getElementById("menu-toggle"); // Hamburger icon
const mobileMenu = document.getElementById("mobile-menu"); // Mobile menu
const closeMenu = document.getElementById("close-menu"); // Close button
const overlay = document.getElementById("overlay"); // Overlay

// Open Menu
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
});

// Close Menu (using close button)
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});

// Close Menu (on clicking outside)
overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});

function toggleDropdown(event) {
  event.preventDefault(); // Prevent link navigation
  const parentDropdown = event.target.parentElement;
  parentDropdown.classList.toggle("open");
}

// Languages switching started...
let translations = {};

// Load a language file dynamically based on the selected language
function loadLanguage(language) {
  fetch(`../../../data/languages/${language}.json`) // Adjusted file path
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      translations = data;
      updateText();
    })
    .catch((error) => console.error("Failed to load language file:", error));
}

// Update the text content of elements with translated strings
function updateText() {
  document.querySelectorAll("[transdata]").forEach((element) => {
    const key = element.getAttribute("transdata");
    if (translations[key]) {
      element.textContent = translations[key];
    }
  });
}

// Change language when the user selects a different language
function changeLanguage(event) {
  const selectedLanguage = event.target.value;
  loadLanguage(selectedLanguage);
}

// Initialize default language
window.onload = () => {
  loadLanguage("sat"); // Default to ᱥᱟᱱᱛᱟᱲᱤ
};
// Languages switching ended...
