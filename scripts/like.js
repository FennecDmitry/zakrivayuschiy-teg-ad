/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

// Находим все элементы на странице по классам
const likeHeartArray = document.querySelectorAll('.like-icon');        // SVG иконки сердца
const likeButtonArray = document.querySelectorAll('.card__like-button'); // Кнопки "Like"
const iconButtonArray = document.querySelectorAll('.card__icon-button'); // Кнопки-обертки иконок

// Добавляем обработчики клика на кнопки-обертки иконок
iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});

// Добавляем обработчики клика на кнопки "Like"
likeButtonArray.forEach((button, index) => {
  button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});

/**
 * Функция переключения состояния "лайк" для сердца
 * @param {Element} heart - SVG элемент сердца
 * @param {Element} button - Кнопка "Like"
 */
function toggleIsLiked(heart, button) {
  // Переключаем класс is-liked для анимации сердца
  heart.classList.toggle('is-liked');
  // Обновляем текст кнопки
  setButtonText(heart, button);
}

/**
 * Функция обновления текста кнопки в зависимости от состояния лайка
 * @param {Element} heart - SVG элемент сердца
 * @param {Element} button - Кнопка "Like"
 */
function setButtonText(heart, button) {
  // Проверяем, есть ли у сердца класс is-liked (лайкнут ли он)
  if ([...heart.classList].includes('is-liked')) {
    // Если лайкнут, меняем текст на "Unlike" после задержки
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Unlike'),
      500  // Задержка 500ms для синхронизации с анимацией
    );
  } else {
    // Если лайк убран, меняем текст на "Like" после задержки
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Like'),
      500  // Задержка 500ms для синхронизации с анимацией
    );
  }
}