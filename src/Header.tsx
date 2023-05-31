import './Header.scss';
import contact from './images/contact icon.svg';
import favourite from './images/favorites icon.svg';
import order from './images/order.svg';
import search from './images/search icon.svg';
import burgerMenuLogo from './images/burgerMenuLogo.svg';

export const Header = () => {
  return (
    <>
      <header>
        <div className="header">
          <div className="page-header">
            <h1>MOODY STUDIO</h1>
            <div className="img-header">
              <img className="desktop-only" src={search} alt="" />
              <img className="mobile-only" src={contact} alt="" />
              <img className="mobile-only" src={order} alt="" />
              <img className="desktop-only" src={favourite} alt="" />
              <button className="mobile-only">
                <img className="burgerMenuLogo mobile-only" src={burgerMenuLogo} alt="" />
              </button>
            </div>
          </div>

          <div className="nav-bar">
            <div className="line"></div>
            <div className="hrefLinks">
              <a href="/" className="desktop-only">
                HOME
              </a>
              <a href="/" className="desktop-only">
                STORE
              </a>
              <a href="/" className="desktop-only">
                ACCOSSORIES
              </a>
              <a href="/" className="desktop-only">
                BRAND
              </a>
              <a href="/" className="desktop-only">
                PAGES
              </a>
              <a href="/" className="desktop-only">
                ABOUT US
              </a>
              <a href="/" className="desktop-only">
                NEWS
              </a>
              <a href="/" className="desktop-only">
                CONTACT US
              </a>
            </div>
            <div className="line"></div>
          </div>
        </div>
      </header>
    </>
  );
};
