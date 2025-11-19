const saveButton = document.getElementById('save_button');
const dialog = document.getElementById('floppy_dialog');
const form = dialog.querySelector('form');
const closeButton = dialog.querySelector('button[type="submit"]');

saveButton.addEventListener('click', () => {
  dialog.showModal();
});

// Предотвращаем отправку формы
form.addEventListener('submit', (e) => {
  e.preventDefault();
  dialog.close();
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

// Дополнительная защита - предотвращаем любое действие по умолчанию
dialog.addEventListener('cancel', (e) => {
  e.preventDefault();
});