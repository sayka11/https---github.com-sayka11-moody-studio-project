import './ProfilePage.scss';
import React from 'react';
import greyBellIcon from '../../assets/image-profile-page/bell-grey-icon.png';
import bellIcon from '../../assets/image-profile-page/bell-icon.png';
import bellInCircle from '../../assets/image-profile-page/bell-in-circle-icon.png';
import blackArrow from '../../assets/image-profile-page/black-arrow.png';
import calendarIcon from '../../assets/image-profile-page/calendar-icon.png';
import homeIcon from '../../assets/image-profile-page/home-icon.png';
import lightningIcon from '../../assets/image-profile-page/lightning.png';
import lockGreyIcon from '../../assets/image-profile-page/lock-grey-icon.png';
import pd from '../../assets/image-profile-page/pd-icon.png';
import penIcon from '../../assets/image-profile-page/pen-icon.png';
import profileIcon from '../../assets/image-profile-page/profile-icon.png';
import questionGrey from '../../assets/image-profile-page//question-grey-icon.png';
import settingsGreyIcon from '../../assets/image-profile-page/settings-grey-icon.png';
import settingsIcon from '../../assets/image-profile-page/settings-icon.png';

export const ProfilePage = () => {
    return (
        <div className="profilePageConteiner">
            <div className="orangePart">
                <div className="pdIconsWrapper">
                    <img src={pd} alt="" />
                    <img  className='orangeIcons' src={homeIcon} alt="" />
                    <img  className='orangeIcons' src={bellIcon} alt="" />
                    <img  className='orangeIcons' src={calendarIcon} alt="" />
                    <img  className='orangeIcons' src={lightningIcon} alt="" />
                    <img  className='orangeIcons' src={profileIcon} alt="" />
                </div>
                <a className='Settings'><img src={settingsIcon} alt="" /></a>
            </div>
        </div>
    );
};