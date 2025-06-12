const toggleButton = document.getElementById('toggle-menu');
const sidebar = document.getElementById('sidebar');
const mainContent = document.querySelector('.main-content');
const aboutLink = document.getElementById('about-link');

toggleButton.addEventListener('click', () => {
  // Toggle sidebar visibility
  sidebar.classList.toggle('active');
  mainContent.classList.toggle('sidebar-active');
});


document.querySelector('.dropdown-toggle').addEventListener('click', function (event) {
  event.preventDefault();  // Спираме стандартното действие
  const dropdown = event.target.closest('.dropdown');
  const menu = dropdown.querySelector('.dropdown-menu');
  const aboutLink = document.getElementById('about-link'); // Достъп до бутона "About"

  // Toggle класа 'open', за да отворим/затворим менюто
  dropdown.classList.toggle('open');

  // Анимация за бутона (добавяне и премахване на transform)
  if (dropdown.classList.contains('open')) {
    setTimeout(function () {
      aboutLink.style.transform = 'translateY(240px)';  // Премества "About" надолу
    }, 100);
  } else {
    setTimeout(function () {
      aboutLink.style.transform = 'translateY(0)';  // Премества "About" обратно
    }, 100);
  }
});
