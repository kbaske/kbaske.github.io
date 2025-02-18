/************************************
 * JavaScript for Homepage Functionality
 ************************************/

// --- GitHub JSON File URLs ---
// Replace these URLs with your actual GitHub raw URLs.
const quotesUrl =
  "https://raw.githubusercontent.com/kbaske/kbaske.github.io/main/data/home/quotes.json";
const featuredProjectUrl =
  "https://raw.githubusercontent.com/kbaske/kbaske.github.io/main/data/home/featured_project.json";
const projectsUrl =
  "https://raw.githubusercontent.com/kbaske/kbaske.github.io/main/data/home/projects.json";
const teamUrl =
  "https://raw.githubusercontent.com/kbaske/kbaske.github.io/main/data/home/team.json";
const affiliatesUrl =
  "https://raw.githubusercontent.com/kbaske/kbaske.github.io/main/data/home/affiliates.json";

// --- Load Quotes ---
async function loadQuotes() {
  try {
    const response = await fetch(quotesUrl);
    if (!response.ok) throw new Error("Failed to fetch quotes");
    const quotesArray = await response.json();
    const slidesContainer = document.getElementById("quotesSlides");
    if (!quotesArray || quotesArray.length === 0) {
      console.error("Quotes array is empty.");
      return;
    }
    quotesArray.forEach((quote) => {
      const slide = document.createElement("div");
      slide.className = "slide";
      // Wrap the quote text with initial and final quotation marks.
      // Replace \n with <br> for proper line breaks.
      slide.innerHTML = `
        <img src="${quote.image}" alt="Quote Image">
        <div class="quote-overlay">
          <p class="quote-text">“${quote.quote.replace(/\n/g, "<br>")}”</p>
          <p class="quote-author">- ${quote.author}</p>
        </div>
      `;
      slidesContainer.appendChild(slide);
    });
    startSlider();
  } catch (error) {
    console.error("Error loading quotes:", error);
  }
}

// --- Simple Slider Functionality ---
let slideIndex = 0;
function startSlider() {
  const slides = document.getElementById("quotesSlides").children;
  if (!slides.length) return;
  setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    document.getElementById("quotesSlides").style.transform = `translateX(-${
      slideIndex * 100
    }%)`;
  }, 7000);
}

// --- Load Featured Project ---
async function loadFeaturedProject() {
  try {
    const response = await fetch(featuredProjectUrl);
    if (!response.ok) throw new Error("Failed to fetch featured projects");
    const projectArray = await response.json();

    const featuredContainer = document.getElementById("featuredProject");
    featuredContainer.innerHTML = ""; // Clear previous content

    projectArray.forEach((entry) => {
      const projectItem = document.createElement("div");
      projectItem.className = "featured-project-item";
      projectItem.innerHTML = `
        <a href="${entry.link}" target="_blank">
          <img src="${entry.image}" alt="Featured Project">
        </a>
      `;
      featuredContainer.appendChild(projectItem);
    });
  } catch (error) {
    console.error("Error loading featured projects:", error);
  }
}

// --- Load Projects ---
async function loadProjects() {
  try {
    const response = await fetch(projectsUrl);
    if (!response.ok) throw new Error("Failed to fetch projects");
    const projectsArray = await response.json();
    const gallery = document.getElementById("projectGallery");
    projectsArray.forEach((entry) => {
      const projectItem = document.createElement("div");
      projectItem.className = "project-item";
      projectItem.innerHTML = `<a href="${entry.link}" target="_blank">
            <img src="${entry.image}" alt="Project"></a>`;
      gallery.appendChild(projectItem);
    });
  } catch (error) {
    console.error("Error loading projects:", error);
  }
}

// --- Load Team Members ---
async function loadTeamMembers() {
  try {
    const response = await fetch(teamUrl);
    if (!response.ok) throw new Error("Failed to fetch team members");
    const teamArray = await response.json();
    const teamContainer = document.getElementById("teamMembers");
    teamArray.forEach((entry) => {
      const member = document.createElement("div");
      member.className = "team-member";
      member.innerHTML = `<img src="${entry.photo}" alt="${entry.name}">
            <h3>${entry.name}</h3>
            <p>${entry.position}</p>`;
      teamContainer.appendChild(member);
    });
  } catch (error) {
    console.error("Error loading team members:", error);
  }
}

// --- Load Affiliates ---
async function loadAffiliates() {
  try {
    const response = await fetch(affiliatesUrl);
    if (!response.ok) throw new Error("Failed to fetch affiliates");
    const affiliatesArray = await response.json();
    const affiliateContainer = document.getElementById("affiliateLogos");
    affiliatesArray.forEach((entry) => {
      const logoDiv = document.createElement("div");
      logoDiv.className = "affiliate-logo";
      logoDiv.innerHTML = `<a href="${entry.link}" target="_blank">
            <img src="${entry.image}" alt="Affiliate Logo"></a>`;
      affiliateContainer.appendChild(logoDiv);
    });
  } catch (error) {
    console.error("Error loading affiliates:", error);
  }
}

// --- Initialize Data Loading ---
document.addEventListener("DOMContentLoaded", () => {
  loadQuotes();
  loadFeaturedProject();
  loadProjects();
  loadTeamMembers();
  loadAffiliates();
});
