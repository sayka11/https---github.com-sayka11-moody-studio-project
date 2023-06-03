import './Header.scss';
import contact from '../../../../assets/image-header-footer/peopleIcon.png';
import favourite from '../../../../assets/image-header-footer/heartIcon.png';
import order from '../../../../assets/image-header-footer/bagIcon.png';
import search from '../../../../assets/image-header-footer/searchIcon.png';
import burgerMenuLogo from "../../../../assets/image-header-footer/burgerMunuLogo.svg";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
  const [visible, setVisible] = useState(false);
  const onBurgerButtonClick = () => {
    setVisible(!visible);};
  return (
    <>
    <header>
      <div className="header">
        <div className="page-header">
          <h1>MOODY STUDIO</h1>
          <div className="img-header">
            <a href="/" className="desktop-only">
              <img src={search} alt="" />
            </a>
            <Link  className="desktop-only" to="/signUp">
              <img src={contact} alt="" />
             </Link>
            <a href="/" className="desktop-only">
              <img src={order} alt="" />
            </a>
            <a href="/" className="desktop-only">
              <img src={favourite} alt="" />
            </a>
            <div className="burger-menu">
              <a href="/" className="mobile-only">
                <img src={contact} alt="" />
              </a>
              <a href="/" className="mobile-only">
                <img src={order} alt="" />
              </a>
              <button className="mobile-only" onClick={onBurgerButtonClick}>
                <img className="burgerMenuLogo mobile-only" src={burgerMenuLogo} alt="" />
              </button>
            </div>
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
