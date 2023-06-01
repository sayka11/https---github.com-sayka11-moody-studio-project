import './Footer.scss';
import facebookIcon from '../../../../assets/image-header-footer/facebookIcon.png';
import instagramIcon from '../../../../assets/image-header-footer/instagramicon.png';
import twitterIcon from '../../../../assets/image-header-footer/twitterIcon.png';
import youtubeIcon from '../../../../assets/image-header-footer/youtubeIcon.png';

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="urbanOutfitters">
          <p className="urban">URBAN OUTFITTERS</p>
          <p className="textForUrban">
            Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor
          </p>
          <p className="adressLink">121 King Street,Melbourne 3000</p>
          <p className="adressLink">+61 3 8376 6284</p>
          <p className="adressLink">contact@urnamoutfitters.com</p>
          <div className="socialLinksIcons">
            <img src={facebookIcon} alt="" />
            <img src={twitterIcon} alt="" />
            <img src={instagramIcon} alt="" />
            <img src={youtubeIcon} alt="" />
          </div>
        </div>
        <div className="shopping">
          <p className="urban">SHOPPING</p>
          <a href=" /" className="shoppinglinks">
            Your card
          </a>
          <a href="/" className="shoppinglinks">
            Your orders
          </a>
          <a href="/" className="shoppinglinks">
            Compared items
          </a>
          <a href="/" className="shoppinglinks">
            Wishlist items
          </a>
          <a href="/" className="shoppinglinks">
            Shipping detail
          </a>
        </div>
        <div className="fromTheBlog">
          <p className="urban">MORE LINK</p>
          <a href="/" className="moreLinkWords">
            Blog
          </a>
          <a href="/" className="moreLinkWords">
            Gift Center
          </a>
          <a href="/" className="moreLinkWords">
            New Arrivals
          </a>
          <a href="/" className="moreLinkWords">
            Buying Guidens
          </a>
        </div>
      </footer>
    </>
  );
};
