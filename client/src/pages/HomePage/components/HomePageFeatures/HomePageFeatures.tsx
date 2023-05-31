import './HomePageFeatures.scss';
import React from 'react';
import yellowBusIcon from '../../../../assets/Image-home-page/yellow-bus-icon.png';
import yellowCardIcon from '../../../../assets/Image-home-page/yellow-card-icon.png';
import yellowHeadphones from '../../../../assets/Image-home-page/yellow-headphones-icon.png';

export const HomePageFeatures = () => {
  return (
    <div id="yellowIconsWrap">
      <div className="busIcon">
        <img src={yellowBusIcon} alt="yelloBus" />
        <div>FREE SHIPPING</div>
      </div>

      <div className="cardIcon">
        <img src={yellowCardIcon} alt="yelloBus" />
        <div>100% MONEY BACK</div>
      </div>

      <div className="headphonesIcon">
        <img src={yellowHeadphones} alt="yelloBus" />
        <div>SUPPORT 24/7</div>
      </div>
    </div>
  );
};
