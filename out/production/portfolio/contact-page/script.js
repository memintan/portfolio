document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent the default form submit action

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Simple validation
    if(name && email && message) {
        // Process the form data, e.g., send to a server or display a confirmation message
        console.log('Form submitted', { name, email, message });
    } else {
        alert('Please fill in all fields.');
    }
});
