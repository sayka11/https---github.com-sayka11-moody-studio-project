/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import './HomePageDetails.scss';
import React, { FC, useState } from 'react';
import vintageChair from '../../../../assets/Image-home-page/vintage-chair.png';
import terracotaVase from '../../../../assets/Image-home-page/terracota-vase.png';


export const HomePageDetails = () => {
  const [isShown, setIsShown] = useState(false);
  const handleMouseOver = () => {
    setIsShown(true);
  };
  const handleMouseOut = () => {
    setIsShown(false);
  };

  return (
    <div className="detailsWrap">
      <div className="inyVintageChair">
        <img
          src={vintageChair}
          alt="vinatageChair"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        {isShown && (
          <div>
          <div className="hoverWrap">
            <div className="whiteWrapper">
              <div className="buttonWrapper">
                <img src="" alt="" />
              </div>
            </div>
          </div>
          </div>
        )}
        <div className="chairTxt">
          <h1>INY VINATGE CHAIR</h1>
          <button>VIEW DETAILS</button>
        </div>
      </div>
      <div className="largeTerracotaVase">
        <img src={terracotaVase} alt="terracotaVase" />

        <div className="vaseTxt">
          <div className="vasetxtWrap">
            <div className="txt">LARGE TERRACOTA </div>
            <div className="txt"> VASE</div>
          </div>
          <button>VIEW DETAILS</button>
        </div>
      </div>
    </div>
  );
};
