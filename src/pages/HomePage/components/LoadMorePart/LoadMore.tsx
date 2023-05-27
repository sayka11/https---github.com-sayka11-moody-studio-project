import './LoadMore.scss';
import { EmailInput } from '../Forms/EmailInput';
import React from 'react';
import emailIcon from '../../../../assets/Image-home-page/email-icon.png';

export const LoadMore = () => {
  return (
    <div className="buttonConteiner">
      <button id="loadButton">LOAD MORE PRODUCTS</button>
      <div className="wrapper">
        <div className="signUpWrapper">
          <div className="sigUptxt-1">SING UP FOR THE NEWSLETTER</div>
          <div className="sigUptxt-2">Subscribe for the latest stories and promotions</div>
        </div>
        <div className="inputWrap">
          <EmailInput />
          <button>
            <img className="emailImage" src={emailIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
