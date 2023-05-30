import './HomePageProducts.scss';
import { Product } from '../Product';
import React from 'react';
import towelImage from '../../../../assets/Image-home-page/towel-image.svg';
import glassBox from '../../../../assets/Image-home-page/glass-box-image.svg';
import largeGlassBox from '../../../../assets/Image-home-page/large-glass-box.svg';
import roundPlacemate from '../../../../assets/Image-home-page/round-placemate-image.svg';
import metalBasket from '../../../../assets/Image-home-page/metal-basket-image.svg';
import ceramicPlates from '../../../../assets/Image-home-page/plates-image.svg';

export const HomePageProducts = () => {
  return (
    <div className="productsWrap1">
      {productsArray.map((items: any) => {
        console.log('items', items);
        return <div></div>;
      })}
    </div>
  );
};
