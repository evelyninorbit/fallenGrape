import { useState } from "react"
function ProductCard({currentIndex, wines}){
    const [hoveredName,setHoveredName] = useState(null)
    return(
        <div className="productcard">
                {wines.map(
                        (wine)=>{
                            const isHovered = hoveredName === wine.name
                            return(
                            <div key={wine.name} className="productcard__item"
                                style={{transform:`translateX(-${currentIndex * 390}px)`,
                                transition:"0.4s ease"}}
                                onMouseEnter={()=>{setHoveredName(wine.name)}}
                                onMouseLeave={()=>{setHoveredName(null)}}>
                                <div className="image__container">
                                <img src={wine.img} alt={wine.name}
                                     style={{position:'absolute', top:0, left:0,
                                        opacity: isHovered? 0 : 1,
                                        transition: 'opacity 0.5s ease, transform 1s ease',
                                        transform: isHovered? 'scale(1.2)': 'scale(1)'}}/>
                                <img src={wine.hoveredImg} alt={wine.name}
                                     style={{position:'absolute', top:0, left:0,
                                        opacity: isHovered? 1 : 0,
                                        transition: 'opacity 0.5s ease, transform 1s ease',
                                        transform: isHovered? 'scale(1.2)': 'scale(1)'}}/>
                                </div>
                                <p className="productcard__name">{wine.name}</p>
                                <p className="productcard__price">{wine.price}</p>
                            </div>
                            )
                        }
                    )
                }

            </div>
    )
}

export default ProductCard