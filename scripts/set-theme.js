/* Этот скрипт использует имена классов theme-menu__button, theme-dark, theme-light и theme-auto;
еще атрибуты disabled и data-theme. Поэтому их нельзя менять в HTML. */

// Находим все кнопки переключения темы на странице
const themeButtons = document.querySelectorAll('.theme-menu__button');

// Добавляем обработчик клика на каждую кнопку темы
themeButtons.forEach((button) => {
  button.onclick = () => {
    // При клике получаем значение data-theme атрибута и меняем тему
    changeTheme(button.getAttribute('data-theme'));
  };
});

/**
 * Функция смены темы оформления
 * @param {string} theme - название темы ('dark', 'light', 'auto')
 */
function changeTheme(theme) {
  // Сбрасываем классы body и добавляем класс выбранной темы
  document.body.className = 'page';
  document.body.classList.add(`theme-${theme}`);
  
  // Обновляем состояние кнопок (делаем активную кнопку неактивной)
  setDisabled(theme);
  
  // Сохраняем выбранную тему в localStorage для сохранения между сессиями
  localStorage.setItem('theme', theme);
}

/**
 * Функция инициализации темы при загрузке страницы
 */
function initTheme() {
  // Пытаемся получить сохраненную тему из localStorage
  const theme = localStorage.getItem('theme');
  if (theme) {
    // Если тема найдена, применяем ее
    changeTheme(theme);
  }
  // Если тема не найдена, применяется тема по умолчанию (указанная в CSS)
}

/**
 * Функция управления состоянием кнопок темы
 * @param {string} theme - активная тема
 */
function setDisabled(theme) {
  // Проходим по всем кнопкам темы
  themeButtons.forEach((item) => {
    if (item.getAttribute('data-theme') === theme) {
      // Делаем кнопку активной темы неактивной (disabled)
      item.setAttribute('disabled', true);
    } else {
      // Все остальные кнопки делаем активными
      item.removeAttribute('disabled');
    }
  });
}

// Инициализируем тему при загрузке страницы
initTheme();