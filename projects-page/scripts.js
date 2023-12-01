function toggleDetails(detailsId) {
    var detailsContent = document.getElementById(detailsId).innerHTML;
    var overlay = document.getElementById('overlay');
    var content = overlay.querySelector('.overlay-content');

    // Inject details into overlay content
    content.innerHTML = '<button class="btn-close" onclick="toggleOverlay()">Close</button>' + detailsContent;
    overlay.style.display = 'flex';
}

function toggleOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}