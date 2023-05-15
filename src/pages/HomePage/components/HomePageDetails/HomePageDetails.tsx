import "./HomePageDetails.scss";
import React, { FC } from "react";
import vintageChair from "../../../../assets/Image-home-page/vintage-chair.png";
import terracotaVase from "../../../../assets/Image-home-page/terracota-vase.png";

export const HomePageDetails = () => {
    return (
        <div className="detailsWrap">
             <div className="inyVintageChair">
        <img src={vintageChair} alt="vinatageChair" />
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
