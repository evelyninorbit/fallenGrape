function Card(image){
    return(
        <div className="image__container">
            <img src={image.src} alt={image.alt} />
        </div>
    )
}

export default Card