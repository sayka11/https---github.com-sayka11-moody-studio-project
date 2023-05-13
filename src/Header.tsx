import './Header.scss';
import contact from './images/contact icon.svg';
import favourite from './images/favorites icon.svg';
import order from './images/order.svg';
import search from './images/search icon.svg';

export const Header = () => {
  return (
    <>
      <header>
        <div className="page-header">
          <h1>MOODY STUDIO</h1>
          <div className="img-header">
            <img className="search-icon" src={search} alt="" />
            <img className="man" src={contact} alt="" />
            <img className="bucket" src={order} alt="" />
            <img className="heart" src={favourite} alt="" />
          </div>
        </div>
        <div className="line"></div>
        <div className="nav-bar">
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
      </header>
    </>
  );
};
