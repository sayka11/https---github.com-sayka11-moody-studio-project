import './Bedsheet.scss';
import { TopRating } from '../TopRating';
import React from 'react';
import beverageGlass from '../../../../assets/Image-home-page/beverage-glass-image.svg';
import eggcups from '../../../../assets/Image-home-page/ceramic-egg-cup-image.svg';
import fourPackCeramicCups from '../../../../assets/Image-home-page/4pack-ceramic-cups-image.svg';
import glazedStonewareImage from '../../../../assets/Image-home-page/glazed-stoneware.svg';
import metalCutleryBasket from '../../../../assets/Image-home-page/metal-cutlery-basket-image.svg';
import smallBambooBox from '../../../../assets/Image-home-page/small-bamboo-box-image.svg';
import trayFoot from '../../../../assets/Image-home-page/tray-with-foot-image.svg';
import twillImage from '../../../../assets/Image-home-page/twill-image.svg';
import twoPackLinenNapkinsImage from '../../../../assets/Image-home-page/2pack-linen-napkins-image.svg';

export const Bedsheet = () => {
  return(
   
      <><div className="bedSheetWrap">
          <div className="bedSheetTxtWrap">
              <div className="bedSheettxt">
                  <div className="h1">BEDSHEET SETS</div>
                  <div className="amount">
                      <div className="amount-1">50$</div>
                      <div className="amount-2">
                          <s>220$</s>
                      </div>
                  </div>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur
                      <br />
                      adipiscing elit, sed do eiusmod tempor.
                  </p>
                  <button>VIEW DETAILS</button>
              </div>
          </div>
      </div><div className="topRatingWrap">
              <div className="topRating">TOP RATING</div>
              <div>
                  <div className="topRatingProductsWrap">
                      <TopRating
                          imageSrc={trayFoot}
                          description={`Tray with Foot Beach Towels`}
                          link="./explore-japan.html"
                          price={'30$'} />
                      <TopRating
                          imageSrc={twillImage}
                          description={`Twill Seat Cushion Beach Towel`}
                          link="./explore-japan.html"
                          price={'30$'} />
                      <TopRating
                          imageSrc={beverageGlass}
                          description={`Fluted Beverage Glass Beach Towel`}
                          link="./explore-japan.html"
                          price={'30$'} />
                      <TopRating
                          imageSrc={eggcups}
                          description={`Ceramic Egg Cup`}
                          link="./explore-japan.html"
                          price={'30$'} />
                      <TopRating
                          imageSrc={smallBambooBox}
                          description={`Small Bamboo Box`}
                          link="./explore-japan.html"
                          price={'30$'} />
                      <TopRating
                          imageSrc={metalCutleryBasket}
                          description={`Metal Cutlery Basket`}
                          link="./explore-japan.html"
                          price={'30$'} />
                      <TopRating
                          imageSrc={fourPackCeramicCups}
                          description={`4-pack Ceramic Cups`}
                          link="./explore-japan.html"
                          price={'30$'} />
                      <TopRating
                          imageSrc={twoPackLinenNapkinsImage}
                          description={`2-pack Linen Napkins`}
                          link="./explore-japan.html"
                          price={'30$'} />
                      <TopRating
                          imageSrc={glazedStonewareImage}
                          description={`Glazed Stoneware Plate`}
                          link="./explore-japan.html"
                          price={'30$'} />
                  </div>
              </div>
      </div>
       </>
);
};
