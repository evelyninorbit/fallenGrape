import logo from '../assets/fallen_grape_logo.png'

function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
          <ul className="navbar__links">
            <li className='navbar__item'>SHOP ALL
            <i className="fa-solid fa-angle-down"></i>
            </li>
            <li className='navbar__item'>SHOP MERCH</li>
            <li className='navbar__item'>ABOUT US</li>
          </ul>
        </div>
        <div className="navbar__logo">
        </div>
        <div className="navbar__right">
            <ul className="navbar__links">
                <li className='navbar__item'>LOGIN</li>
                <li className='navbar__item'>CART</li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
