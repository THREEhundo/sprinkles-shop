/***
 * Shopping Cart Object
 * name & quantity of donut
 * update quantity
 * remove donut
 * item price
 * total price
 */

/***
 * Structure of HTML
 * ! Empty Cart Page
 * h2 Shopping Cart
 * p You have nothing in your shopping cart
 * button Continue Shopping
 * ! Cart with Items Page
 * h2 Shopping Cart
 * section of items
 * donut image & wrapper
 * donut link & wrapper
 * quantity input and buttons
 * item price
 *
 */

/***
 * Update cart based on cart object
 *
 */

class ShoppingCart {
	constructor() {
		this.cartItems = [
			{ count: 0, type: 'cherryGlaze', price: 5, subtotal: 0 },
			{ count: 2, type: 'vanillaGlaze', price: 5, subtotal: 0 },
			{ count: 3, type: 'mochaGlaze', price: 5, subtotal: 0 },
			{ count: 0, type: 'oreoCrumble', price: 5, subtotal: 0 },
			{ count: 0, type: 'tangerineZest', price: 5, subtotal: 0 },
			{ count: 0, type: 'purpleSwirl', price: 5, subtotal: 0 },
		]
	}

	get totalCount() {
		return this.totalCount()
	}

	totalCount() {
		return this.cartItems.reduce((acc, curr) => (acc += curr.count), 0)
	}

	get cartSubtotal() {
		return this.cartSubtotal()
	}

	cartSubtotal() {
		return this.cartItems.reduce((acc, curr) => (acc += curr.subtotal), 0)
	}
	set updateSingleItem(item) {
		return this.updateSingleItem(item)
	}

	updateSingleItem(item) {
		return this.cartItems.map((donut) => {
			if (item.type == donut.type) {
				donut.count = item.count
				donut.subtotal = donut.count * donut.price
				return donut
			} else {
				return donut
			}
		})
	}
}

let shop = new ShoppingCart()
console.log(shop)
console.log(shop.updateSingleItem({ count: 10, type: 'cherryGlaze' }))
console.log(shop.updateSingleItem({ count: 5, type: 'tangerineZest' }))
console.log(shop.cartSubtotal())

/***
 * get total count of items
 * get single item
 * get cart subtotal
 * set single item count & subtotal
 */

// When clicking shopping cart --> if empty show empty section

const cartIcon = document.querySelector('a[href="../pages/cart.html"]')
const emptyCartSection = document.querySelector('.empty-cart')
const fullCartSection = document.querySelector('.full-cart')
cartIcon.addEventListener('click', toggleCartView)

function toggleCartView() {
	console.log(shop.totalCount)
	if (shop.totalCount === 0) {
		emptyCartSection.style.display = 'block'
		fullCartSection.style.display = 'none'
	} else {
		emptyCartSection.style.display = 'none'
		fullCartSection.style.display = 'block'
	}
}
