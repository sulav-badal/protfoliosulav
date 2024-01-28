let prevScrollpos = window.pageYOffset;
const navbar = document.querySelector(".navbar");
const stickyNav = document.querySelector(".sticky-nav");

window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
    stickyNav.classList.remove("show");
  } else {
    navbar.style.top = "-80px";
    stickyNav.classList.add("show");
  }
  prevScrollpos = currentScrollPos;
});

function hideLoadingScreen() {
  document.getElementById("loading-screen").style.display = "none";
}

function showInfo(id) {
  // Hide all other info boxes
  var infos = document.getElementsByClassName("info");
  for (var i = 0; i < infos.length; i++) {
    if (infos[i].id != id + "-info") {
      infos[i].style.display = "none";
    }
  }

  // Show info box for clicked photo
  var info = document.getElementById(id + "-info");
  if (info.style.display == "block") {
    info.style.display = "none";
  } else {
    info.style.display = "block";
  }
}

// Smooth scrolling logic
document.addEventListener("DOMContentLoaded", function () {
  // Get all links in the navigation
  var navLinks = document.querySelectorAll(".navbar ul li a, .sticky-nav ul li a");

  // Add click event listener to each link
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the target section's ID from the href attribute
      var targetId = link.getAttribute("href").substring(1);

      // Find the target section
      var targetSection = document.getElementById(targetId);

      // Scroll to the target section smoothly
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});



/* end hamburger */
document.getElementById('hamburger-icon').addEventListener('click', function() {
  var hamburgerIcon = document.getElementById('hamburger-icon');
  var navigationMenu = document.getElementById('navigation-menu');

  hamburgerIcon.classList.toggle('cross');
  
  if (getComputedStyle(navigationMenu).display === 'none' || navigationMenu.style.display === '') {
      navigationMenu.style.display = 'block';
  } else {
      navigationMenu.style.display = 'none';
  }
});

