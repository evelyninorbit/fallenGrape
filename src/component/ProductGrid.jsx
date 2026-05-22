import { useState } from "react"
import ProductCard from "./ProductCard"
import Product1 from "../assets/Product-1.png"
import Product2 from "../assets/Product-2.png"
import Product3 from "../assets/Product-3.png"
import Product4 from "../assets/Product-4.png"
import Product1Hovered from '../assets/Product1Hovered.png'
import Product2Hovered from '../assets/Product2Hovered.png'
import Product3Hovered from '../assets/Product3Hovered.png'
import Product4Hovered from '../assets/Product4Hovered.png'

function ProductGrid(){
    const [currentIndex,setCurrentIndex] = useState(0)
    const wines = [
        {name:"grape", img:Product1, hoveredImg: Product1Hovered,price:"$45"},
        {name:"apple", img:Product2, hoveredImg: Product2Hovered,price:"$50"},
        {name:"Grava", img:Product3, hoveredImg: Product3Hovered,price:"$60"},
        {name:"pineapple", img:Product4, hoveredImg: Product4Hovered,price:"$80"},
    ]
    const VISIBLE = 3
    const max = wines.length - VISIBLE
    const goNext = ()=>{setCurrentIndex((prev)=>Math.min(prev+1,max))}
    const goPrev = ()=>{setCurrentIndex((prev)=>Math.max(prev-1,0))}
    
    return(
        <>
        <h1>Shop Wine</h1>
        <div className="productgrid">
            <button className="productgrid__button" onClick={goPrev}>←</button>
            <ProductCard currentIndex={currentIndex} wines={wines}/>
            <button className="productgrid__button" onClick={goNext}>→</button>
        </div>
        <div className="productgrid__dots">
            {Array.from({ length: wines.length - VISIBLE + 1 }).map((_, index) => (
            <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                    backgroundColor: index === currentIndex ? '#dfb790' : '#eae0d4',
                    display:"inline-block",
                    width:'15px',
                    height:'15px',
                    borderRadius:'50%',
                    border:`1px solid ${index === currentIndex ? '#dfb790' : '#533e25'}`,
                    margin:'0 8px'
                }}
  />
))}
        </div>
        </>
        
    )
}

export default ProductGrid