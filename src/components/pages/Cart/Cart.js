import CartItem from "./CartItem"
import './Cart.css'
import FadeIn from 'react-fade-in'
import Button from "../../lib/Button"
import { useState } from "react"

const Cart = (props) => {
	const { cartData, add, remove } = props

	const [checkoutStatus, setCheckoutStatus] = useState('We hope you enjoy your purchase!')

	const addItem = (game) => {
		add(game)
	}

	const removeItem = (game) => {
		remove(game)
	}

	const displayCartData = () => {
		if (cartData.length < 1) {
			return(<div>Cart is empty</div>)
		}
		let cartItemElements = []
		for (let game of cartData) {
			cartItemElements.push(
				<FadeIn>
					<div>
						<hr />
						<CartItem game = {game} add = {addItem} remove = {removeItem} />
					</div>
				</FadeIn>
			)
		}
		return cartItemElements
	}

	const cartTotal = () => {
		if (cartData.length < 1) {
			return(<div></div>)
		}
		let runningTotal = 0
		for (let game of cartData) {
			runningTotal += (game.price * game.quantity)
		}
		return(
			<h1>
				Cart Total: ${runningTotal.toFixed(2)}
			</h1>
		)
	}

	const checkout = () => {
		if (cartData.length < 1) {
			setCheckoutStatus('Please add games to your cart')
			return
		}
		setCheckoutStatus('Please wait')
		setTimeout(() => {
			setCheckoutStatus('Please wait.')
			setTimeout(() => {
				setCheckoutStatus('Please wait..')
				setTimeout(() => {
					setCheckoutStatus('Please wait...')
					setTimeout(() => {
						setCheckoutStatus('Checkout Succeeded!')
					}, 500)
				}, 200)
			}, 200)
		}, 200)
	}
  	
	return (
		<div className = 'cart-page-wrapper'>
			<div className = 'cart-list-wrapper'>
				<FadeIn>
					{cartTotal()}
					{displayCartData()}
					<hr />
					<p>{checkoutStatus}</p>
					<Button label = 'Checkout' task = {checkout} />
				</FadeIn>
			</div>
		</div>
  	)
}

export default Cart;
