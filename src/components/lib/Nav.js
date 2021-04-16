import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = (props) => {
    
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }
    
    const activeStyle = {
        color: 'white',
        textDecoration: 'underline'
    }

    return (
        <nav>
            <NavLink exact = {true} activeStyle = {activeStyle} style = {navStyle} to = '/'>
                <h1>Indie Games 'r' Us</h1>
            </NavLink>
            <ul className = 'nav-links'>
                <NavLink activeStyle = {activeStyle} style = {navStyle} to = '/shop'>
                    <li>Shop</li>
                </NavLink>
                <NavLink activeStyle = {activeStyle} style = {navStyle} to = '/cart'>
                    <li>{`Cart (${props.cartCount})`}</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Nav;
