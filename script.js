document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('volunteerForm');
    const responseMessage = document.getElementById('responseMessage');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(form);
  
      fetch('process_form.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        if (data.trim() === 'success') {
          responseMessage.innerHTML = '<h2>Thank you for volunteering!</h2>';
          form.reset(); // Optional: Reset the form after successful submission
        } else {
          responseMessage.innerHTML = '<h2>Oops! Something went wrong. Please try again later.</h2>';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        responseMessage.innerHTML = '<h2>Oops! Something went wrong. Please try again later.</h2>';
      });
    });
  });
  