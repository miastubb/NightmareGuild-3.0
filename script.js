const tab = document.getElementById("side-tab");
const menu = document.getElementById("slide-menu");
const closeBtn = document.getElementById("close-btn");

tab.addEventListener("click", () => {
  menu.classList.toggle("open"); // Better to use toggle
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && e.target !== tab) {
    menu.classList.remove("open");
  }
});