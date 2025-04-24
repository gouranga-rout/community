    const detailsLink = document.getElementById('details-link');
    const popupOffer = document.getElementById('popupOffer');
    const place = document.getElementById('place');
    const offercloseBtn = document.getElementById('offerclose-btn');

    // Show popup on click
    detailsLink.addEventListener('click', (event) => {
      event.preventDefault();
      popupOffer.style.display = 'block';
      place.style.display = 'block';
    });

    // Hide popup on close
    offercloseBtn.addEventListener('click', () => {
      popupOffer.style.display = 'none';
      place.style.display = 'none';
    });

    // Hide popup when clicking on overlay
    place.addEventListener('click', () => {
      popupOffer.style.display = 'none';
      place.style.display = 'none';
    });

// Show popup on page load
window.onload = () => {
  setTimeout(() => {
    popupOffer.style.display = 'block';
    place.style.display = 'block';
  }, 3000);
};
