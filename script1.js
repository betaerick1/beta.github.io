document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("volunteerForm");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Validate form fields
      if (!validateForm()) {
        return;
      }
  
      // Prepare form data to send to the server
      const formData = new FormData(form);
  
      // Send form data using fetch API
      fetch("submit_form.php", {
        method: "POST",
        body: formData
      })
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        throw new Error("Network response was not ok.");
      })
      .then(data => {
        // Show success message to the user
        alert(data);
        form.reset(); // Clear the form after successful submission
      })
      .catch(error => {
        // Handle errors
        console.error("Error:", error);
        alert("Sorry, there was an error submitting your form. Please try again later.");
      });
    });
  
    // Function to validate form fields
    function validateForm() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
  
      if (name === "" || email === "" || phone === "") {
        alert("Please fill in all required fields.");
        return false;
      }
  
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
      }
  
      return true;
    }
  });
  