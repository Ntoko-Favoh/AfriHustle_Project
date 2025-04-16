document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".dropdown-toggle");
  
    toggles.forEach(toggle => {
      toggle.addEventListener("click", () => {
        const parent = toggle.parentElement;
        parent.classList.toggle("active");
      });
    });
  });