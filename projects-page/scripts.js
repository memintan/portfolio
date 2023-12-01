
function toggleDetails(detailsId) {
    var details = document.getElementById(detailsId);
    var card = details.closest('.project-card');

    if (details.style.display === 'block') {
        details.style.display = 'none';
        card.style.flex = '0 1 30%'; // Reset the flex-basis to original
    } else {
        details.style.display = 'block';
        card.style.flex = '0 1 100%'; // Expand the card
    }

    // Optional: Scroll the expanded card into view
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

