import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FadeIn from 'react-fade-in'
import DetailsLeft from './DetailsLeft'
import DetailsRight from './DetailsRight'
import Image from '../../lib/Image'
import './ItemDetail.css'

const ItemDetail = (props) => {
    const { link } = useParams()
    const { games, addItem } = props

    const [game, setGame] = useState({})
    
    useEffect(() => {
        getGame()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getGame = () => {
        let tempGame
        for (let i in games) {
            if (games[i].link === link) {
                tempGame = games[i]
            }
        }
        setGame(tempGame)
    }

    const addToCart = () => {
        addItem({
            name: game.name,
            price: game.price,
            link: game.link,
            quantity: 1
        })
    }

    const scrollToDetails = () => {
        window.scrollTo({
            top: 1000,
            left: 0,
            behavior: 'smooth'
        })
    }

  	return (
        <FadeIn>
            <div className = 'game-page'>
                <div className = 'splash-wrapper'>
                    <Image
                        filePath = {`../assets/${game.link}/splash.jpg`}
                        className = {'background-splash'}
                        alt = {`${game.name} splash`}
                    />
                </div>
                <div onClick = {scrollToDetails} className = 'goto-details'>
                    <div>↓</div>
                </div>
                <div className = 'game-detail-area'>
                    <DetailsLeft game = {game} cart = {addToCart} />
                    <DetailsRight game = {game} />
                </div>
            </div>
		</FadeIn>
  	)
}

export default ItemDetail;
