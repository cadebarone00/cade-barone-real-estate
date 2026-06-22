(() => {
  const modalOverlay = document.querySelector('[data-contact-overlay]');
  const modalCard = document.querySelector('[data-modal-card]');
  const contactForm = document.querySelector('[data-contact-form]');
  const successPanel = document.querySelector('[data-contact-success]');

  function openContact() {
    if (!modalOverlay) return;
    modalOverlay.classList.add('is-open');
    if (contactForm) contactForm.classList.remove('is-hidden');
    if (successPanel) successPanel.classList.remove('is-shown');
  }
  function closeContact() {
    if (modalOverlay) modalOverlay.classList.remove('is-open');
  }

  document.querySelectorAll('[data-open-contact]').forEach((btn) => {
    btn.addEventListener('click', openContact);
  });
  document.querySelectorAll('[data-close-contact]').forEach((btn) => {
    btn.addEventListener('click', closeContact);
  });
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (!e.target.closest('[data-modal-card]')) closeContact();
    });
  }
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.classList.add('is-hidden');
      if (successPanel) successPanel.classList.add('is-shown');
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeContact();
  });
  window.addEventListener('open-contact', openContact);
})();
