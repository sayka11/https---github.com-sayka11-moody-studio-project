import './HomePageProducts.scss';
import { Product } from '../Product';
import React from 'react';
import towelImage from '../../../../assets/Image-home-page/towel-image.svg';
import glassBox from "../../../../assets/Image-home-page/glass-box-image.svg";
import largeGlassBox from "../../../../assets/Image-home-page/large-glass-box.svg";
import roundPlacemate from "../../../../assets/Image-home-page/round-placemate-image.svg";
import metalBasket from "../../../../assets/Image-home-page/metal-basket-image.svg";
import ceramicPlates from "../../../../assets/Image-home-page/plates-image.svg";


export const HomePageProducts = () => {
  return (
    <div className="firstProductsWrap">
    <div className="conteiner-1">
        <Product
          imageSrc={towelImage}
          description={`Linen Beach Towel`}
          link="./explore-japan.html"
          price={'30$'}
        />
  <Product imageSrc={glassBox} description={`Square Clear Glass Box`} link="./explore-japan.html" price={'30$'} />
  <Product imageSrc={ceramicPlates} description={`4-pack Small Ceramic Plates`} link="./explore-japan.html" price={'30$'} />
  </div>
  <div className="conteiner-2">
  <Product imageSrc={largeGlassBox} description={`Large Clear Glass Box`} link="./explore-japan.html"  price={'30$'} />
  <Product imageSrc={roundPlacemate} description={`Round Jute Placemat`} link="./explore-japan.html" price={'30$'} />
  <Product imageSrc={metalBasket} description={`Metal Wire Basket`} link="./explore-japan.html" price={'30$'} />
  </div>
 </div>
  );
};
