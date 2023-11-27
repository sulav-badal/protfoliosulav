let prevScrollpos = window.pageYOffset;
const navbar = document.querySelector(".navbar");
const stickyNav = document.querySelector(".sticky-nav");

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
    stickyNav.classList.remove("show");
  } else {
    navbar.style.top = "-80px";
    stickyNav.classList.add("show");
  }
  prevScrollpos = currentScrollPos;
};

    function hideLoadingScreen() {
	    document.getElementById("loading-screen").style.display = "none";
    }
    

    function showInfo(id) {
  // Hide all other info boxes
  var infos = document.getElementsByClassName('info');
  for (var i = 0; i < infos.length; i++) {
    if (infos[i].id != id + '-info') {
      infos[i].style.display = 'none';
    }
}

  // Show info box for clicked photo
  var info = document.getElementById(id + '-info');
  if (info.style.display == 'block') {
    info.style.display = 'none';
  } else {
    info.style.display = 'block';
  }
}
       