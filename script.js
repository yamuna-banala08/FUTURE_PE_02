function showMessage() {
  alert("Thank you! Your appointment request has been submitted.");
}

// Smooth scroll for Book Appointment button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Fade-in effect for service boxes
window.addEventListener("load", () => {
  const boxes = document.querySelectorAll(".service-box");

  boxes.forEach((box, index) => {
    setTimeout(() => {
      box.style.opacity = "1";
      box.style.transform = "translateY(0)";
    }, index * 200);
  });
});
