import './HomePageProducts.scss';
import { Product } from '../Product';
import React from 'react';
import towelImage from '../../../../assets/Image-home-page/towel-image.svg';

export const HomePageProducts = () => {
  return (
    <Product imageSrc={towelImage} description={`Linen Beach Towel`} link="./explore-japan.html" stars={''} />
  );
};
