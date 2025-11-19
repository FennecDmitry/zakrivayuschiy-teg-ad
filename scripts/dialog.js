// scripts/dialog.js
const saveButton = document.getElementById('save_button');
const dialog = document.getElementById('floppy_dialog');
const closeButton = dialog.querySelector('button[type="submit"]');

saveButton.addEventListener('click', () => {
  dialog.showModal();
});

closeButton.addEventListener('click', (e) => {
  e.preventDefault();
  dialog.close();
});

// Закрытие по клику на backdrop
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) {
    dialog.close();
  }
});