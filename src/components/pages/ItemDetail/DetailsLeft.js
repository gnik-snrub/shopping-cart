import Button from '../../lib/Button'
import Image from '../../lib/Image'
import './DetailsLeft.css'

const DetailsLeft = (props) => {
    const { game, cart } = props

    const collectGenres = () => {
        const genres = game.genres
        const genreList = []
        for (let i in genres) {
            genreList.push(
                <p key = {genres[i]}>{genres[i]}</p>
            )
        }
        return genreList
    }

    return (
        <div className = 'details-left'>
            <div className = 'details-logo-wrapper'>
                <Image 
                    filePath = {`../assets/${game.link}/logo.png`}
                    className = {'game-logo'}
                    alt = {`${game.name} logo`}
                />
            </div>
            <div className = 'genre-list'>
                {collectGenres()}
            </div>
            <div className = 'game-description'>
                {game.description}
            </div>
            <div className = 'price-buy-button'>
                <p>{`$${game.price}`}</p>
                <Button label = {'Add to cart'} task = {cart} />
            </div>
        </div>
    )
}

export default DetailsLeft