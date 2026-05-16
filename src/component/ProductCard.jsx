import { useState } from "react"
function ProductCard({currentIndex, wines}){
    const VISIBLE = 3
    const [hoveredName,setHoveredName] = useState(null)
    return(
        <div className="productcard">
                {wines.slice(currentIndex, currentIndex+VISIBLE).map(
                        (wine)=>{
                            const isHovered = hoveredName === wine.name
                            return(
                            <div key={wine.name} className="productcard__item"
                                style={{transform:`translateX(-${currentIndex * 390}px)`,
                                transition:"0.4s ease"}}
                                onMouseEnter={()=>{setHoveredName(wine.name)}}
                                onMouseLeave={()=>{setHoveredName(null)}}>
                                <div className="image__container">
                                <img src={isHovered? wine.hoveredImg : wine.img} alt={wine.name}
                                     style={{transition: '0.3s ease', 
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