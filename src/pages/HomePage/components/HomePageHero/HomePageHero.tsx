import './HomePageHero.scss';
import React from 'react';
import hotDeals from '../../../../assets/Image-home-page/hot-deals-chair.png';

export const HomePageHero = () => {
  return (
    <div className="heroConteiner">
      <div className="heroComponents">
        <img className="hotDeals" src={hotDeals} alt="chair" />
        <div className="hotDealstxt">
          <p>HOT DEALS THIS WEEK</p>
          <div className='h1txt'>SALE UP 50% <br/> MODERN FURNITURE</div>
          <button>VIEW NOW</button>
        </div>
      </div>
    </div>
  );
};
