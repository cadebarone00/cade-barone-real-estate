(() => {
  const REELS = [
    { tag: 'TORONTO CONDOS', title: 'Liberty Village + Fort York', sub: '$550K budget · 378 likes' },
    { tag: 'INSIDE A 1-BED', title: 'CityPlace tour', sub: 'Listed for $619K · 207 likes' },
    { tag: 'FIRST-TIME BUYER', title: 'Leslieville walkthrough', sub: 'Closing day · 294 likes' },
  ];

  const lightbox = document.querySelector('[data-lightbox-overlay]');
  const lightboxTag = document.querySelector('[data-lightbox-tag]');
  const lightboxTitle = document.querySelector('[data-lightbox-title]');
  const lightboxSub = document.querySelector('[data-lightbox-sub]');

  function openReel(index) {
    const reel = REELS[index];
    if (!reel || !lightbox) return;
    lightboxTag.textContent = reel.tag;
    lightboxTitle.textContent = reel.title;
    lightboxSub.textContent = reel.sub;
    lightbox.classList.add('is-open');
  }
  function closeReel() {
    if (lightbox) lightbox.classList.remove('is-open');
  }

  document.querySelectorAll('[data-open-reel]').forEach((btn) => {
    btn.addEventListener('click', () => openReel(Number(btn.dataset.openReel)));
  });
  document.querySelectorAll('[data-close-reel]').forEach((btn) => {
    btn.addEventListener('click', closeReel);
  });
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (!e.target.closest('[data-lb-card]')) closeReel();
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeReel();
  });
})();
