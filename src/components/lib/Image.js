const Image = (props) => {
    return (
        <img
            src = {process.env.PUBLIC_URL + props.filePath}
            className = {props.className}
            alt = {props.alt}
            title = {props.alt}
        />
    )
}

export default Image