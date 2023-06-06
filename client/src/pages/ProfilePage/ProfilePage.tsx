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
import profilePhoto from "../../assets/image-profile-page/profile-in-cercle-icon.png";
import CountryInput from './components/CityInput/CountryInput';
import CityInput from './components/CityInput/StateInput/CityInput';
import Password from 'antd/es/input/Password';

export const ProfilePage = () => {
    return (
        <div className="profilePageContainer">
            <div className="orangePart">
                <div className="pdIconsWrapper">
                    <img src={pd} alt="" />
                    <img className='orangeIcon-1' src={homeIcon} alt="" />
                    <img className='orangeIcon-2' src={bellIcon} alt="" />
                    <img className='orangeIcon-3' src={calendarIcon} alt="" />
                    <img className='orangeIcon-4' src={lightningIcon} alt="" />
                    <img className='orangeIcon-5' src={profileIcon} alt="" />
                </div>
                <div className="orangeCircle">
                    <a href="/" className='settings'><img className='setting' src={settingsIcon} alt="" /></a>
                </div>
            </div>
            <div className="settingsPart">
                <div className="settinsPartContainer">
                    <div className="arrowWrap">
                        <img className='blackArrow' src={blackArrow} alt="" />
                        <a href="/" className='arrowTxt'>settings</a>
                    </div>
                    <div className="editProfileWrapper">
                        <div className="editWrap">
                            <img className='penIcon' src={penIcon} alt="" />
                            <a href="/" className='editTxt'>Edit profile</a>
                        </div>
                        <div className="notificationWrap">
                            <img className='bellIcon' src={greyBellIcon} alt="" />
                            <a href="/" className='greyTxt'>Notification</a>
                        </div>
                        <div className="securityWrap">
                            <img className='lockIcon' src={lockGreyIcon} alt="" />
                            <a href="/" className='greyTxt'>Security</a>
                        </div>
                        <div className="appearanceWrap">
                            <img className='settingsIcon' src={settingsGreyIcon} alt="" />
                            <a href="/" className='greyTxt'>Appearance</a>
                        </div>
                        <div className="helpWrap">
                            <img className='questionIcon' src={questionGrey} alt="" />
                            <a href="/" className='greyTxt'>Help</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="editProfilePart">
                <div className="editWrap">
                    <div className="editProfileText">Edit profile</div>
                    <img className='profileImage' src={profilePhoto} alt="" />
                </div>
                <div className="inputWrapper">
                    <div className="firstNameinputWrap">
                        <div className="firstNameInput">
                            <div className="firstName">First Name</div>
                            <input id="first" type="text" placeholder='Enter your name' />
                        </div>
                        <div className="secondNameinput">
                            <div className="secondName">Last Name</div>
                            <input id="second" type="text" placeholder='Enter your last name' />
                        </div>
                    </div>
                    <div className="emailInputWrap">
                        <div className="Email">Email</div>
                        <input id="third" type="email" placeholder='Enter your email' />
                    </div>
                    <div className="addressInputWrap">
                        <div className="addressInput">Address</div>
                        <input id="fourth" type="text" placeholder='Enter your address' />
                    </div>
                    <div className="contactInputWrap">
                        <div className="contactInput">Contact number</div>
                        <input id="fifth" type="text" placeholder='Enter your phone number' />
                    </div>
                    <div className="countryAndCityInputWrap">
                        <div className="countryInput">
                            <div className="countryTxt">Country</div>
                            <CountryInput />
                        </div>
                        <div className="cityInput">
                            <div className="cityTxt">City</div>
                            <CityInput />
                        </div>
                    </div>
                    <div className="passwordInputWrap">
                        <div className="passTxt">Password</div>
                        <Password placeholder='Enter your password' />
                    </div>
                </div>
                <div className="buttonWrapper">
                    <button className='cancelButton' title='Title'>
                        <div className='cancelTxt'>Cancel</div>
                        </button>
                    <button className='saveButton' title='Title'>
                    <div className='saveTxt'>Save</div>
                        </button>
                </div>
            </div>
            <div className="lastContainer">
             <div className="iconsWrapper">
                <div className="bellInCircle">
                    <img className='"bellInCircle' src={bellInCircle} alt=" " />
                </div>
                <img className='profilePhoto-2' src={profilePhoto} alt=" " />
             </div>

            </div>
        </div>
    );
};