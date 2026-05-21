import AnnouncementBar from "./AnnouncementBar"
import NavBar from "./NavBar"
function Hero(){
    return(
        <>
            <div className="Hero">
                <div className="image__container">
                    <div className="bg-image">
                        <div style={{
                            position:'fixed',
                            zIndex:'100'
                        }}>
                            <AnnouncementBar />
                            <NavBar />
                        </div>
                       
                        <p className="hero__text">It's natural</p>
                        <button className="hero__button">SHOP ALL</button>
                    </div>
                </div>
                <div className="hero__content">
                <p>Natural wine made with<br/>
                organically farmed grapes and<br/>
                minimal intervention.</p>   
                </div>
                
            </div>
            
        </>
    )
}

export default Hero