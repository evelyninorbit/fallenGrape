import Card from "./Card"
import Featured1 from "../assets/featured-1.jpg"
import Featured2 from "../assets/featured-2.jpg"
import Featured3 from "../assets/featured-3.jpg"

function FeaturedCollection(){
    return(
        <>
        <div className="featuredcollection">
            <h1>The 3-Pack</h1>
            <div className="featuredcollection__card">
                <Card src={Featured1} />
                <Card src={Featured2} />
                <Card src={Featured3} />
            </div>
            <button className="featuredcollection__button">SHOP</button>
        </div>
        
        </>
    )
}

export default FeaturedCollection