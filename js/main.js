document.addEventListener("DOMContentLoaded", function () {
  const toggleMenu = document.getElementById("toggle-menu");
  const navLinks = document.getElementById("nav-links");

  toggleMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const icon = toggleMenu.querySelector("i");
    if (navLinks.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".nav-links") &&
      !event.target.closest(".toggle-menu") &&
      navLinks.classList.contains("active")
    ) {
      navLinks.classList.remove("active");

      const icon = toggleMenu.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  const menuLinks = document.querySelectorAll(".nav-links a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");

      const icon = toggleMenu.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });
  });
});
