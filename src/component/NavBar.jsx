import { useState } from "react";
import logo from "../assets/fallen_grape_logo.png";
import Product1 from "../assets/product-1.png";
import Product2 from "../assets/product-2.png";
import Product3 from "../assets/product-3.png";
import Product4 from "../assets/product-4.png";

function NavBar() {
  const wines = [
    { name: '"MOTHER" - SKIN CONTACT ORANGE WINE', img: Product1 },
    { name: '"FATHER" - SKIN CONTACT RED WINE', img: Product2 },
    { name: '"BROTHER" - SKIN CONTACT WHITE WINE', img: Product3 },
    { name: '"SISTER" - SKIN CONTACT PINK WINE', img: Product4 },
  ];
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          <ul className="navbar__links">
            <li
              className="navbar__item"
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              SHOP ALL
              <i className="fa-solid fa-angle-down"></i>
            </li>
            <li className="navbar__item">SHOP MERCH</li>
            <li className="navbar__item">ABOUT US</li>
          </ul>
        </div>
        <div className="navbar__logo"></div>
        <div className="navbar__right">
          <ul className="navbar__links">
            <li className="navbar__item">LOGIN</li>
            <li className="navbar__item">CART</li>
          </ul>
        </div>
      </div>
      <div
        className="navbar__productgrid"
        style={{
          height: `${isHovered ? "fit-content" : "0"}`,
          padding: `${isHovered ? "20px 15px" : "0"}`,
        }}
      >
        {wines.map((wine, index) => (
          <div key={index} className="productgrid__item">
            <img src={wine.img} alt={wine.name} />
            <p style={{ paddingTop: "5px" }}>{isHovered ? wine.name : ""}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default NavBar;
