

    document.addEventListener('DOMContentLoaded', function () {
      const aboutMenuItem = document.querySelector('nav ul li:nth-child(2) a');
      const skillsMenuItem = document.querySelector('nav ul li:nth-child(3) a');
      const projectsMenuItem = document.querySelector('nav ul li:nth-child(4) a');
      const resumeMenuItem = document.querySelector('nav ul li:nth-child(5) a');
      const contactMenuItem = document.querySelector('nav ul li:nth-child(6) a');

      aboutMenuItem.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('.about-section');
      });

      skillsMenuItem.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('.skills-section');
      });

      projectsMenuItem.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('.projects-section');
      });

      resumeMenuItem.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('.Resume-section');
      });

      contactMenuItem.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToSection('.contact-section');
      });

      function scrollToSection(sectionSelector) {
        const targetSection = document.querySelector(sectionSelector);
        const yOffset = -10;

        window.scrollTo({
          top: targetSection.offsetTop + yOffset,
          behavior: 'smooth',
        });
      }
    });
function toggleDropdown(projectId) {
    var dropdown = document.getElementById(projectId);
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
    
      var allDropdowns = document.querySelectorAll('.project-dropdown');
      allDropdowns.forEach(function(item) {
        item.style.display = "none";
      });
      dropdown.style.display = "block";
     
      dropdown.style.animation = "dropdown-animation 0.5s ease";
    }
  }
  