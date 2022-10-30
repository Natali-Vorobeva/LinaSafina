const menuBurger = document.querySelector('.menu-burger');
const burgerOpen = document.querySelector('.burger');
const menuBurgerClose = document.querySelector('.menu-burger__button-image');

function showMenu() {
	menuBurger.classList.add('menu_opened');	
	}

	function closeMenu() {
		menuBurger.classList.remove('menu_opened');
	}

	
	menuBurgerClose.addEventListener('click', closeMenu);	
	burgerOpen.addEventListener('click', showMenu);