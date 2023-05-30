/* eslint-disable prettier/prettier */
import './HomePageProducts.scss';
import React from 'react';
import { Product } from '../Product';
import { productsArray } from '../../../../others/objects';

export const HomePageProducts = () => {

  return (
    <div className="productsWrap1">
      {productsArray.map((items: any) => {
        return <div></div>;
      })}
    </div>
  );
};

{
  /* <Product imageSrc={fourPackCeramicCups} description={`4-pack Small Ceramic Plates`} link=" " price="30$" /> */
}
