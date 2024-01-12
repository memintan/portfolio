function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    var form = document.getElementById('contact-form');

    fetch('https://formspree.io/f/mgejjqlk', {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        },
    })
    .then(response => {
        if (response.ok) {
            window.location.href = 'thankYouPage.html'; // Redirect to your custom thank you page
        } else {
            alert('Oops! There was a problem submitting your form');
        }
    })
    .catch(error => console.error('Error:', error));
}
