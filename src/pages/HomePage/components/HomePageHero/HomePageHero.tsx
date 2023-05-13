import React, { FC } from "react";
import "./HomePageHero.scss";
import hotDeals from "../../../../assets/Image-home-page/hot-deals-chair.png"

export const HomePageHero = () => {
    return (
        <div className="heroConteiner">
            <div className="heroComponents">
                <img className="hotDeals" src={hotDeals} alt="chair" />
                <div className="hotDealstxt">
                    <p>HOT DEALS THIS WEEK</p>
                    <div className="h1txtwrap">
                    <div className="h1txt">SALE UP 50% </div>
                    <div className="h1txt">MODERN FURNITURE</div>
                    </div>
                    <button>VIEW NOW</button>
                </div>
            </div>
        </div>
    );
};