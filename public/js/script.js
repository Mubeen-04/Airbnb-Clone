(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

// Function to fade out and remove the alert completely
function fadeOutAlert(alertId) {
  const alertElement = document.getElementById(alertId);
  if (alertElement) {
      setTimeout(() => {
          alertElement.classList.remove('show'); // Start fade out
          setTimeout(() => {
              alertElement.remove(); // Remove from DOM after fade-out
          }, 300); // Wait for Bootstrap's fade-out animation (300ms)
      }, 3000); // 3 seconds before fade-out starts
  }
}

// Apply fade-out to success and error alerts
fadeOutAlert('success-alert');
fadeOutAlert('error-alert');

document.addEventListener("DOMContentLoaded", function () {
  const themeSwitch = document.getElementById("themeSwitch");
  const emoji = document.querySelector(".slider .emoji");
  const body = document.body;

  function updateEmoji() {
      emoji.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
  }

  if (localStorage.getItem("darkMode") === "enabled") {
      body.classList.add("dark-mode");
      themeSwitch.checked = true;
      updateEmoji();
  }

  themeSwitch.addEventListener("change", function () {
      body.classList.toggle("dark-mode");
      updateEmoji();

      if (body.classList.contains("dark-mode")) {
          localStorage.setItem("darkMode", "enabled");
      } else {
          localStorage.setItem("darkMode", "disabled");
      }
  });
});

let taxSwitch = document.getElementById("flexSwitchCheckDefault");
  taxSwitch.addEventListener("click", () => {
    let taxInfo = document.getElementsByClassName("tax-info");
    for (let info of taxInfo) {
      info.style.display = (info.style.display !== "inline") ? "inline" : "none";
    }
  });
