import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in'
import './Home.css'

const Home = () => {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }

    return(
        <div className = 'home-wrapper'>
            <div className = 'home-content'>
                <FadeIn>
                    <p>Now Available!</p>
                    <hr />
                    <Link style = {navStyle} to = {'/shop/isaac'}>
                        <p>The Binding of Isaac: Repentance</p>
                    </Link>
                </FadeIn>
            </div>
        </div>
    )
}

export default Home