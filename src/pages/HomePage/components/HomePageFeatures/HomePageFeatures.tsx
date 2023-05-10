import React, { FC } from "react";
import "./HomePageFeatures.scss";
import twoPackLinenNapkinsImage from "../../../../assets/Image-home-page/2pack-linen-napkins-image.svg"
import fourPackCeramicCups from "../../../../assets/Image-home-page/4pack-ceramic-cups-image.svg"
import bedsheetImage from "../../../../assets/Image-home-page/bedsheet-image.svg"
import beverageGlass from "../../../../assets/Image-home-page/beverage-glass-image.svg"
import bohoChic from "../../../../assets/Image-home-page/boho-chic-image.svg"
import eggcups from "../../../../assets/Image-home-page/ceramic-egg-cup-image.svg"
import decorImage from "../../../../assets/Image-home-page/decor-image.svg"
import emailIcon from "../../../../assets/Image-home-page/email-icon.png"
import glassBox from "../../../../assets/Image-home-page/glass-box-image.svg"
import glazedStoneware from "../../../../assets/Image-home-page/glazed-stoneware.svg"
import largeGlassBox from "../../../../assets/Image-home-page/large-glass-box.svg"
import metalBasket from "../../../../assets/Image-home-page/metal-basket-image.svg"
import metalCutleryBasket from "../../../../assets/Image-home-page/metal-cutlery-basket-image.svg"
import plates from "../../../../assets/Image-home-page/plates-image.svg"
import roundPlacemate from "../../../../assets/Image-home-page/round-placemate-image.svg"
import smallBambooBox from "../../../../assets/Image-home-page/small-bamboo-box-image.svg"
import terracotaVase from "../../../../assets/Image-home-page/terracota-vase.png"
import towelImage from "../../../../assets/Image-home-page/towel-image.svg"
import trayFoot from "../../../../assets/Image-home-page/tray-with-foot-image.svg"
import twillImage from "../../../../assets/Image-home-page/twill-image.svg"
import vintageChair from "../../../../assets/Image-home-page/vintage-chair.png"
import yellowBusIcon from "../../../../assets/Image-home-page/yellow-bus-icon.png"
import yellowCardIcon from "../../../../assets/Image-home-page/yellow-card-icon.png"
import yellowHeadphones from "../../../../assets/Image-home-page/yellow-headphones-icon.png"

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












