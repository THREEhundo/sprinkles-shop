const hamburger = document.querySelector('.menu')

const shoppingMobileMenu = document.querySelector('#shopping-mobile-menu')

const mobileListItems = document.querySelectorAll('.mobile-list-item')

function toggleMobileMenu() {
	const dropDownMenu = document.querySelector('.drop-down-menu')
	dropDownMenu.classList.toggle('block')
	dropDownMenu.classList.toggle('none')
	document.body.classList.toggle('top-fixed')
}

hamburger.addEventListener('click', () => toggleMobileMenu())

shoppingMobileMenu.addEventListener('click', () => toggleMobileMenu())

mobileListItems.forEach((item) =>
	item.addEventListener('click', () => hamburger.classList.toggle('opened')),
)
