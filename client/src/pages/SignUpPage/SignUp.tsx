import './SignUp.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import appleIcon from '../../assets/image-signUp-page/apple-icon.svg';
import googleIcon from '../../assets/image-signUp-page/google-icon.svg';
import signUpIcon from '../../assets/image-signUp-page/signUp-icon.jpg';

export const SignUp = () => {
  return (
    <div className="sign-up-page">
      <div>
        <img className="img-s" src={signUpIcon} alt="" />
      </div>

      <div className="conteiner-all">
        <div className="conteiner-1">
          <div className="circle"></div>
          <h1>Shop with us</h1>
          <h2>Join us today</h2>
        </div>
        <div className="conteiner-2">
          <button className="sign-up-google">
            <div className="first-button">
              <div>
                <img className="google-button" src={googleIcon} alt="icon" />
              </div>
              <div> Sign up with Google</div>
            </div>
          </button>

          <button className="sign-up-apple">
            <div className="second-button">
              <div>
                <img className="apple-button" src={appleIcon} alt="icon" />
              </div>
              <div> Sign up with Apple</div>
            </div>
          </button>
          <div className="lines">
            <div>
              <hr className="underline" />
            </div>
            <div className="or-s">OR</div>
            <div>
              <hr className="underline" />
            </div>
          </div>
          <button className="sign-up-black">
            <div className="third-button">
              <div>Sign up with phone or email</div>
            </div>
          </button>

          <p>
            By signing up, you agree to the <u>Terms of Service</u> and
            <br />
            <u>Privacy Policy</u>, including <u>cookie use.</u>
          </p>
        </div>

        <div className="conteiner-3">
          <h3>Already have an account?</h3>
          <Link to="/login" className="log-in">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};
