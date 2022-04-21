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
	/*** e.matches checks to see if the viewport is 700px or less */
	e.matches && productImg
		? productImg.classList.add('animate__animated', 'animate__fadeInRight')
		: !e.matches && productImg
		? productImg.classList.remove('animate__animated', 'animate__fadeInRight')
		: ''
}

/*** Animates product on browser size change & window load */
mq700.addEventListener('change', screenTest)
document.addEventListener('DOMContentLoaded', function (e) {
	screenTest(mq700)
})

/*** Animates shop list items on load */
document.addEventListener('DOMContentLoaded', function (e) {
	const donutsList = document.querySelector('.donuts-list')
	return donutsList
		? donutsList.classList.add('animate__animated', 'animate__fadeIn')
		: ''
})

// ! Add event listener to freeze y scroll & close on escape
const modal = document.querySelector('#modal')
const loginBtn = document.querySelector('a[href="#login"]')
console.log(loginBtn)
const body = document.querySelector('body')
loginBtn.addEventListener('click', () => {
	console.log(`click click`)
	//body.style.overflowY = 'hidden'
	//modal.cl
})
/**
 * Create login module
 * 1. frosted background div
 * 2. container div
 * 3. welcome h1
 * 3. form
 * 4. email input
 * 5. password input
 * 6. sign in button
 * 7. forgot password? anchor tag
 * 8. create account anchor tag
 * 9. event listener on forgot password link
 * 9. JS add class display none to login
 * 10. add display: grid to forgot-password section
 * 11. event listener on create account link
 * 12. add display: grid to create account section
 * 13. login-container display: none
 */

/**
 * Forgot password module
 * 1. Reset password header
 * 2.email input
 * 3. send reset link button
 * 4. back to sign in anchor
 */

/**
 * Create account module
 * 1.Create Account Header
 * 2. First Name Input
 * 3. Last Name input
 * 4. email input
 * 5. Create Password Input
 * 6. Re-type password input
 * 7. Create Account Button
 * 8. Already have an account? Sign in anchor
 */
