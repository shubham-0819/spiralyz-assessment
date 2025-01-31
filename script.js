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
const popUpEl = document.querySelector(".video-popup");

if (playBtn) {
  playBtn.addEventListener("click", () => {
    // popUpEl.style.visibility = "visible";
    createVideoModal();
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

function createVideoModal() {
  const modal = document.createElement("div");
  modal.classList.add("video-popup");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "9999";
  modal.style.padding = "20px";
  modal.innerHTML = `
    <div class="video-container" style="position: relative;">
      <button onclick="removeVideoModal()" style="position: absolute; top: -40px; right: 0; background: white; border: none; padding: 8px 12px; cursor: pointer; border-radius: 4px;">✕</button>
      <video id="mainVideo" controls>
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  `;

  document.body.appendChild(modal);
}

function removeVideoModal() {
  const modal = document.querySelector(".video-popup");
  modal.remove();
}
