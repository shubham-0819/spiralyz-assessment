// Country List
const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "Japan",
  "China",
  "Brazil",
  "Mexico",
];

// Populate country dropdown
const countrySelect = document.getElementById("country");
countries.forEach((country) => {
  const option = document.createElement("option");
  option.value = country;
  option.textContent = country;
  countrySelect.appendChild(option);
});

// Form validation
function validateForm(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  // Basic validation
  let isValid = true;
  for (let [key, value] of formData.entries()) {
    if (!value.trim()) {
      isValid = false;
      break;
    }
  }

  if (isValid) {
    window.location.href = "thank-you.html";
  } else {
    alert("Please fill in all fields");
  }

  return false;
}

// Video player functionality
const videoContainer = document.querySelector(".video-container");
const video = document.getElementById("mainVideo");
const playBtn = document.querySelector(".play-btn");
const videoOverlay = document.querySelector(".video-overlay");

if (playBtn) {
  playBtn.addEventListener("click", () => {
    video.play();
    videoOverlay.style.display = "none";
  });
}

if (video) {
  video.addEventListener("pause", () => {
    videoOverlay.style.display = "flex";
  });
}

// Mobile menu functionality
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Testimonial carousel
const dots = document.querySelectorAll(".dot");
const testimonials = document.querySelectorAll(".testimonial");
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((t) => t.classList.remove("active"));
  dots.forEach((d) => d.classList.remove("active"));

  testimonials[index].classList.add("active");
  dots[index].classList.add("active");
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentTestimonial = index;
    showTestimonial(currentTestimonial);
  });
});

// Auto-rotate testimonials
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 5000);
