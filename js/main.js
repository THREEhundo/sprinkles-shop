const hamburger = document.querySelector('.menu')
const dropDownMenu = document.querySelector('.drop-down-menu')
hamburger.addEventListener('click', () => {
	// if class opened is true
	// display block -> drop-down-menu
	dropDownMenu.classList.toggle('block')
	dropDownMenu.classList.toggle('none')
	document.body.classList.toggle('top-fixed')
})
