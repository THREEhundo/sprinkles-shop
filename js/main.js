const hamburger = document.querySelector('.menu')
const dropDownMenu = document.querySelector('.drop-down-menu')
const mobileListItems = document.querySelectorAll('.mobile-list-item')

function toggleMobileMenu() {
	dropDownMenu.classList.toggle('block')
	dropDownMenu.classList.toggle('none')
	document.body.classList.toggle('top-fixed')
}

hamburger.addEventListener('click', () => toggleMobileMenu())

mobileListItems.forEach((item) =>
	item.addEventListener('click', () => {
		toggleMobileMenu()
		hamburger.classList.toggle('opened')
	}),
)
