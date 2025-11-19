// scripts/dialog.js

// Находим кнопку "Сохранить на память" по ID
const saveButton = document.getElementById('save_button');
// Находим модальное окно (диалог) по ID
const dialog = document.getElementById('floppy_dialog');

// Добавляем обработчик клика на кнопку "Сохранить на память"
saveButton.addEventListener('click', () => {
  // Показываем модальное окно методом showModal()
  // Этот метод активирует нативный функционал диалога
  dialog.showModal();
});

// Добавляем обработчик клика на само модальное окно
dialog.addEventListener('click', (e) => {
  // Проверяем, был ли клик именно на backdrop (фон вокруг диалога)
  // e.target === dialog означает, что клик был на полупрозрачном фоне, а не на содержимом диалога
  if (e.target === dialog) {
    // Закрываем модальное окно при клике на backdrop
    dialog.close();
  }
});