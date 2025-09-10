const cards = document.querySelectorAll('.workshop-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    const rect = img.getBoundingClientRect();

    // Clone the image
    const clone = img.cloneNode(true);
    document.body.appendChild(clone);

    // Set initial position
    clone.style.position = 'fixed';
    clone.style.top = rect.top + 'px';
    clone.style.left = rect.left + 'px';
    clone.style.width = rect.width + 'px';
    clone.style.height = rect.height + 'px';
    clone.style.borderRadius = '10px';
    clone.classList.add('morph-image');

    // Force a repaint before animation
    clone.getBoundingClientRect();

    // Animate to fullscreen hero
    clone.style.top = '0';
    clone.style.left = '0';
    clone.style.width = '100vw';
    clone.style.height = '100vh';
    clone.style.borderRadius = '0px';

    // After animation, redirect or show new content
    clone.addEventListener('transitionend', () => {
      window.location.href = 'workshop-detail.html';
      // or reveal a hidden hero section dynamically
    });
  });
});
