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

const productImg = document.querySelector('.product-img')
const mq700 = window.matchMedia('(max-width: 700px)')

function productAnimation() {
	return productImg.classList.add('animate__animate', 'animate__fadeInRight')
}

function screenTest(e) {
	if (e.matches) {
		/*** the viewport is 700px or less */
		productImg.classList.add('animate__animated', 'animate__fadeInRight')
	} else {
		productImg.classList.remove('animate__animated', 'animate__fadeInRight')
	}
}

/*** Animates product on browser size change & window load */
mq700.addEventListener('change', screenTest)
document.addEventListener('DOMContentLoaded', function (e) {
	screenTest(mq700)
})
