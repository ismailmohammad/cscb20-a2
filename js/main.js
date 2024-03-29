// Scrolling functionality
// Call the scroll to top function when the user scrolls the width of the navbar
window.onscroll = function() {
  showScrollButton("scroll-to-top")
};
// Function to check whether to show scroll button
function showScrollButton(buttonID) {
  // Get the navbar height
  var navbarHeight = document.getElementById('navbar').clientHeight;
  // Check if the user scrolled the height of the navbar
  if (window.pageYOffset > navbarHeight) {
    // Show the button if they did indeed scroll past it
    document.getElementById(buttonID).style.display = "block";
  } else {
    // otherwise hide the button again, ie. scrolling back to top manually
    document.getElementById(buttonID).style.display = "none";
  }
}
// Scroll to the top function
function scrollToTop() {
  window.scrollTo(0, 0);
}

function showMenu() {
  // Get the navbar object
  var navbar = document.getElementById("navbar");
  // Check if the class is just navbar if it is, switch it to navbar and responsive, otherwise
  if (navbar.className === "navbar") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navbar";
  }
}


function switchToPanelAsync() {
  // Set the class of the title-panel to panel on devices with less than 970px width
  setTimeout(function switchToPanel() {
    if (window.innerWidth <= 970) {
      document.getElementById('title-panel').className = "panel lightpink";
      document.getElementById('navbar-homelink').style.display = "none";
    } else {
      document.getElementById('title-panel').className = "fullwidth-panel lightpink";
      document.getElementById('navbar-homelink').style.display = "block";
    }
  }, 100)
}

window.addEventListener('resize', switchToPanelAsync);
switchToPanelAsync();

