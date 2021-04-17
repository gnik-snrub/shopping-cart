import Image from '../../lib/Image'
import './DetailsRight.css'

const DetailsRight = (props) => {
    const { game, link } = props

    const openImage = (path) => {
        window.open(process.env.PUBLIC_URL + path)
    }

    return (
        <div className = 'details-right'>
            <div className = 'image-grid'>
                <div
                    className = {'image-wrapper'}
                    onClick = {() => {openImage(`./${game.link}/1.jpg`)}}
                >
                    <Image
                        filePath = {`/assets/${link}/1.jpg`}
                        className = {'game-image'}
                        alt = {`${game.name} image 1`}
                    />
                </div>
                <div
                    className = {'image-wrapper'}
                    onClick = {() => {openImage(`./${game.link}/2.jpg`)}}
                >
                    <Image
                        filePath = {`/assets/${link}/2.jpg`}
                        className = {'game-image'}
                        alt = {`${game.name} image 2`}
                    />
                </div>
                <div 
                    className = {'image-wrapper'}
                    onClick = {() => {openImage(`./${game.link}/3.jpg`)}}
                >
                    <Image
                        filePath = {`/assets/${link}/3.jpg`}
                        className = {'game-image'}
                        alt = {`${game.name} image 3`}
                    />
                </div>
                <div 
                    className = {'image-wrapper'}
                    onClick = {() => {openImage(`./${game.link}/4.jpg`)}}
                >
                    <Image
                        filePath = {`/assets/${link}/4.jpg`}
                        className = {'game-image'}
                        alt = {`${game.name} image 4`}
                    />
                </div>
            </div>
        </div>
    )
}

export default DetailsRight