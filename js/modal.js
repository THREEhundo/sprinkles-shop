const modal = document.querySelector('#modal')
const loginBtn = document.querySelector('a[href="#login"]')
console.log(loginBtn)
const resetPasswordBtn = document.querySelector('a[href="#reset-password"]')
const loginContainerBtn = document.querySelector('a[href="#login-container"]')
const createAccountBtn = document.querySelector('a[href="#create-account"]')
const signinBtn = document.querySelector('a[href="#signin"]')
const body = document.querySelector('body')
const loginModal = document.querySelector('#login')
const resetPasswordModal = document.querySelector('#reset-password')
const createAccountModal = document.querySelector('#create-account')

// Opens Login Modal
loginBtn.addEventListener('click', toggleModal)

// EventListener for closing Login Modal with Escape key if it's open
body.addEventListener('keydown', (e) =>
	e.key === 'Escape' && !modal.classList.contains('hide') ? toggleModal() : '',
)

// ! Only targets the Aside modal and not it's children
modal.addEventListener('click', (e) => (e.target === this ? toggleModal() : ''))

function toggleModal() {
	// revert overflowY to visible
	body.style.overflowY === 'hidden'
		? (body.style.overflowY = 'visible')
		: (body.style.overflowY = 'hidden')
	// toggle hide class
	modal.classList.toggle('hide')
	// toggle login-pane or add it
	modal.classList.contains('login-pane')
		? modal.classList.toggle('login-pane')
		: modal.classList.add('login-pane')
}

// Opens Reset Password Modal from Login Modal
resetPasswordBtn.addEventListener('click', openForgotPasswordModal)

// When Login-Container is open & forgot password link is clicked
function openForgotPasswordModal() {
	//hide login section
	loginModal.classList.toggle('hide', 'login-container')
	resetPasswordModal.classList.toggle('hide')
	resetPasswordModal.classList.add('login-container')
}

loginContainerBtn.addEventListener(
	'click',
	openLoginModalCloseForgotPasswordModal,
)

function openLoginModalCloseForgotPasswordModal() {
	resetPasswordModal.classList.toggle('hide', 'login-container')
	loginModal.classList.remove('hide')
}

// Open Create Account Modal from Login Modal
createAccountBtn.addEventListener('click', openCreateAccountModal)

function openCreateAccountModal() {
	loginModal.classList.contains('hide')
		? loginModal.classList.remove('hide')
		: loginModal.classList.add('hide')
	createAccountModal.classList.remove('hide')
	createAccountModal.classList.add('login-container')
}

// Links back to Sign in Modal from Create Account Modal
signinBtn.addEventListener('click', openLoginModalCloseCreateAccountModal)

function openLoginModalCloseCreateAccountModal() {
	loginModal.classList.contains('hide') && loginModal.classList.remove('hide')
	loginModal.classList.add('login-container')
	createAccountModal.classList.toggle('hide')
}