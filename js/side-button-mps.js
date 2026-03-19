document.addEventListener("DOMContentLoaded", function() {
    // Start the button animation
    setTimeout(function() {
      document.querySelector(".side-button").style.right = "0";
    }, 500); // Delay before starting the button animation
  });
  
  function openForm() {
    document.getElementById("enrollForm").style.display = "block";
    document.getElementById("enrollForm").style.animation = "slideInForm 1s ease forwards";
  }
  
  function closeForm() {
    document.getElementById("enrollForm").style.display = "none";
    document.getElementById("enrollForm").style.animation = ""; // Reset animation
  }
