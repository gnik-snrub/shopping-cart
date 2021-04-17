import { Link } from 'react-router-dom'
import './CartItem.css'
import Image from '../../lib/Image'
import { useState } from 'react'

const CartItem = (props) => {
	const { game, add, remove } = props

	const [logoPath, ] = useState(`/assets/${game.link}/logo.png`)

	const addItem = (game) => {
		add(game)
	}

	const removeItem = (game) => {
		remove(game)
	}

	return(
        <div className = 'cart-item-wrapper'>
            <div className = 'cart-item'>
				<Link to = {`/shop/${game.link}`}>
					<Image 
                    	filePath = {logoPath}
                    	className = {'cart-item-logo'}
	                    alt = {`${game.name} logo`}
					/>
				</Link>
				<div className = 'cart-item-detail-wrapper'>
					<div className = 'cart-item-quantity-wrapper'>
		        		<div onClick = {() => {addItem(game)}}>+</div>
    	    	    	<div>{game.quantity}</div>
	        			<div onClick = {() => {removeItem(game)}}>-</div>
					</div>
					<div className = 'cart-item-price-wrapper'>
		        		<div>${game.price}</div>
		        		<div className = 'item-total-price'>${(game.price * game.quantity).toFixed(2)}</div>
					</div>
				</div>
	        </div>
        </div>
    )
}

export default CartItem