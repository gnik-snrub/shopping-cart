import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Image from '../../lib/Image'
import './Shop.css'
import FadeIn from 'react-fade-in'

const Shop = (props) => {
    const { games } = props
    const [items, setItems] = useState([])
	const wrapper = useRef(null)
    
    useEffect(() => {
        getGameData()
		wrapper.current.classList.add('fade-in')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getGameData = () => {
        const items = []
        for (let i in games) {
            items.push(games[i])
        }
        setItems(items)
    }
    
    const navStyle = {
        color: 'black',
        textDecoration: 'none'
    }

  	return (
        <div className = 'shop-page' ref = {wrapper}>
            <div className = 'list-wrapper'>
                <div className = 'item-list'>
                    {items.map(item => (
			            <FadeIn>
                            <Link to = {`/shop/${item.link}`} style = {navStyle} key = {item.link} >
                                <Image
                                    filePath = {`../assets/${item.link}/logo.png`}
                                    className = {'link-logo'}
                                    alt = {`${item.name} logo`}
                                />
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
  	)
}

export default Shop;
