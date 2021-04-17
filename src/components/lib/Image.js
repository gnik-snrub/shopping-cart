import { useEffect, useState } from "react"

const Image = (props) => {
    const [imageSource, ] = useState(process.env.PUBLIC_URL + props.filePath)
    useEffect(() => {
        console.log(imageSource)
    })
    
    return (
        <img
            src = {imageSource}
            className = {props.className}
            alt = {props.alt}
            title = {props.alt}
        />
    )
}

export default Image