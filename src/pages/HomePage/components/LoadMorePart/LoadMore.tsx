import './LoadMore.scss';
import React from 'react';
import emailIcon from "../../../../assets/Image-home-page/email-icon.png";

export const LoadMore = () => (
    <div className="buttonConteiner">
        <button id="loadButton">LOAD MORE PRODUCTS</button>
        <div className="wrapper">
            <div className="signUpWrapper">
                <div className="sigUptxt-1">SING UP FOR THE NEWSLETTER</div>
                <div className="sigUptxt-2">Subscribe for the latest stories and promotions</div>
            </div>
            <div className="inputWrap">
                <form>
                    <input type="email" name="email" id="email" placeholder="Enter your e-mail address" required />
                    <button id='emailButton' type="submit">
                        <img className='emailImage' src={emailIcon} alt="" /></button>
                </form>
                <span>Thank You For Subscribing!</span>
            </div></div>
    
    </div>



);