import './Header.scss';
import contact from '../../../../assets/image-header-footer/peopleIcon.png';
import favourite from '../../../../assets/image-header-footer/heartIcon.png';
import order from '../../../../assets/image-header-footer/bagIcon.png';
import search from '../../../../assets/image-header-footer/searchIcon.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <div className="header">
          <div className="page-header">
            <h1>MOODY STUDIO</h1>
            <div className="img-header">
              <img className="search-icon" src={search} alt="" />
              <Link to="/edit">  <img className="man" src={contact} alt="" /> </Link>
              <img className="bucket" src={order} alt="" />
              <img className="heart" src={favourite} alt="" />
            </div>
          </div>

          <div className="nav-bar">
            <div className="line"></div>
            <div className="hrefLinks">
              <a href="/" className="nav">
                HOME
              </a>
              <a href="/" className="nav">
                STORE
              </a>
              <a href="/" className="nav">
                ACCOSSORIES
              </a>
              <a href="/" className="nav">
                BRAND
              </a>
              <a href="/" className="nav">
                PAGES
              </a>
              <a href="/" className="nav">
                ABOUT US
              </a>
              <a href="/" className="nav">
                NEWS
              </a>
              <a href="/" className="nav">
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
