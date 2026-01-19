// ===============================
// Horion Cleaner Website config
// ===============================

// 🔧 Cambia qui:
const DOWNLOAD_URL = "https://raw.githubusercontent.com/rickycat29/horioncleaner/main/APP/HorionCleaner.exe";
const SRC_URL = "https://github.com/rickycat29/HorionCleanerAPP";
const VERSION = "v0 | Beta!";

// ===============================
// Init
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  // Set year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Set version
  const verEl = document.getElementById("ver");
  if (verEl) verEl.textContent = VERSION;

  // Set download links
  const dl1 = document.getElementById("downloadBtn");
  const dl2 = document.getElementById("downloadBtn2");
  if (dl1) dl1.href = DOWNLOAD_URL;
  if (dl2) dl2.href = DOWNLOAD_URL;

  // Reveal on scroll
  const revealEls = Array.from(document.querySelectorAll(".reveal"));
  const io = new IntersectionObserver(
    (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("on")),
    { threshold: 0.12 }
  );
  revealEls.forEach(el => io.observe(el));

  // Source link
  const scl = document.getElementById("sourceLinkBtn");
  if (scl) {
    scl.addEventListener("click", () => {
      window.open(SRC_URL, "_blank", "noopener");
    });
  } // se funziona sborro --> FUNZIONA, SBORRO!
});
