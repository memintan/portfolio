






function toggleDetails(detailsId) {
    var details = document.getElementById(detailsId);
    var card = details.closest('.project-card');

    if (details.style.display === 'block') {
        details.style.display = 'none';
        card.style.flex = '0 1 30%'; // Reset the flex-basis to original
    } else {
        details.style.display = 'block';
        card.style.flex = '0 1 80%'; // Expand the card
    }

    // Optional: Scroll the expanded card into view
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


//function toggleDetails(detailsId) {
//    var details = document.getElementById(detailsId);
//
//    if (details.style.display === 'block') {
//        details.style.display = 'none';
//    } else {
//        // Close any already open details
//        var openDetails = document.querySelectorAll('.project-details');
//        openDetails.forEach(function(detail) {
//            detail.style.display = 'none';
//        });
//        // Show the clicked details
//        details.style.display = 'block';
//    }
//
//    // Optional: Scroll the expanded card into view
//    document.querySelector('.projects-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
//}
