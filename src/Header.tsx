import './Header.scss';
import contact from './images/contact icon.svg';
import favourite from './images/favorites icon.svg';
import order from './images/order.svg';
import search from './images/search icon.svg';
import burgerMenuLogo from './images/burgerMenuLogo.svg';
import { useState } from 'react';

export const Header = () => {
  const [visible, setVisible] = useState(false);
  const onBurgerButtonClick = () => {
    setVisible(!visible);
  };
  return (
    <>
      <header>
        <div className="header">
          <div className="page-header">
            <h1>MOODY STUDIO</h1>
            <div className="img-header">
              <a href="/" className="desktop-only">
                <img  src={search} alt="" />
              </a>
              <a href="/" className="mobile-only">
                <img  src={contact} alt="" />
              </a>
              <a href="/" className="mobile-only">
                {' '}
                <img  src={order} alt="" />
              </a>
              <a href="/" className="desktop-only">
                <img  src={favourite} alt="" />
              </a>
              <button className="mobile-only" onClick={onBurgerButtonClick}>
                <img className="burgerMenuLogo mobile-only" src={burgerMenuLogo} alt="" />
              </button>
            </div>
          </div>

          <div className="nav-bar">
            <div className="line"></div>
            <div className={`hrefLinks ${visible ? 'visible' : ''}`}>
              <a href="/">HOME</a>
              <a href="/">STORE</a>
              <a href="/">ACCOSSORIES</a>
              <a href="/">BRAND</a>
              <a href="/">PAGES</a>
              <a href="/">ABOUT US</a>
              <a href="/">NEWS</a>
              <a href="/">CONTACT US</a>
            </div>
            <div className="line"></div>
          </div>
        </div>
      </header>
    </>
  );
};