document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    // Here you can add code to send the form data to your desired endpoint or handle it as needed
    // For demonstration purposes, we will just show a success message
    document.getElementById('success-message').innerHTML = "Message sent successfully!";
    document.getElementById('contact-form').reset();
});
