const flag = document.getElementById('flag');
const dropdown = document.getElementById('language-dropdown');
const mainContent = document.getElementById('main-content');
const languageDropdown = document.getElementById('language-dropdown');
const htmlElement = document.documentElement;

flag.addEventListener('click', function (event) {
	if (dropdown.style.display === 'none' || dropdown.style.display === '') {
		dropdown.style.display = 'block';
	} else {
		dropdown.style.display = 'none';
	}
	event.stopPropagation();
});

// Отменяем событие "click" для элементов списка
dropdown.addEventListener('click', function (event) {
	event.stopPropagation();
});

// Закрываем выпадающий список при клике за его пределами
document.addEventListener('click', function () {
	dropdown.style.display = 'none';
});