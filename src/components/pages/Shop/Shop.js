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
        const tempItems = []
        for (let i in games) {
            tempItems.push(games[i])
        }
        setItems(tempItems)
    }
    
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }

  	return (
        <div className = 'shop-page' ref = {wrapper}>
            <div className = 'list-wrapper'>
                <div className = 'item-list'>
                    {items.map(item => (
			            <FadeIn key = {item.link}>
                            <Link to = {`/shop/${item.link}`} style = {navStyle}>
                                <Image
                                    filePath = {`/assets/${item.link}/logo.png`}
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
