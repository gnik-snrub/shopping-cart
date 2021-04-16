import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'
import Nav from './components/lib/Nav'
import Cart from './components/pages/Cart/Cart'
import Shop from './components/pages/Shop/Shop'
import ItemDetail from './components/pages/ItemDetail/ItemDetail'
import Home from './components/pages/Home/Home'
import ScrollToTop from './components/lib/ScrollToTop'
import Blur from './components/lib/Blur'
import gameData from './data.js'
import './App.css'
import { useState } from 'react'

const App = () => {
	const [games, ] = useState(gameData)
	const [cart, setCart] = useState([])

	const addToCart = (item) => {
		let cartCopy = [ ...cart ]
		if (cartCopy.length === 0) {
			cartCopy.push(item)
			setCart(cartCopy)
			return
		}
		for (let game of cartCopy) {
			if (game.name === item.name) {
				game.quantity += 1
				setCart(cartCopy)
				return
			}
		}
		cartCopy.push(item)
		setCart(cartCopy)
	}

	const removeFromCart = (item) => {
		let cartCopy = [ ...cart ]
		const index = cartCopy.indexOf(item)
		cartCopy[index].quantity -= 1
		if (cartCopy[index].quantity < 1) {
			cartCopy.splice(index, 1)
		}
		setCart(cartCopy)
	}

  	return (
		<Router>
    		<div className="App">
				<ScrollToTop />
				<Switch>
					<Route exact path = '/'>
						<Nav cartCount = {cart.length}/>
						<div className = 'background-image'/>
					</Route>
					<Route>
						<Nav cartCount = {cart.length}/>
						<div className = 'background-image'/>
        				<Blur />
					</Route>
				</Switch>
				<Switch>
					<Route exact path = '/'>
						<Home />
					</Route>
					<Route exact path = '/shop'>
						<Shop games = {games} />
					</Route>
					<Route exact path = '/shop/:link'>
						<ItemDetail games = {games} addItem = {addToCart} />
					</Route>
					<Route exact path = '/cart'>
						<Cart cartData = {cart} add = {addToCart} remove = {removeFromCart} />
					</Route>
				</Switch>
    		</div>
		</Router>
  	)
}

export default App;
