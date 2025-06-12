// Получаваме бутонa и текущата тема
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Проверяваме и прилагаме темата от LocalStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
}

// Функция за смяна на темата
themeToggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggleButton.textContent = '🌕'; // Променяме иконата на бутона
        localStorage.setItem('theme', 'dark-theme'); // Записваме избора в localStorage
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggleButton.textContent = '🌙'; // Променяме иконата на бутона
        localStorage.setItem('theme', 'light-theme'); // Записваме избора в localStorage
    }
});
