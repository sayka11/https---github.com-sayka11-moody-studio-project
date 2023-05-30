/* eslint-disable prettier/prettier */
import './LogIn.scss';
import { useState } from 'react';
import LogInBack from '../../assets/Image-home-page/logInBack.webp';
import googleIcon from '../../assets/Image-home-page/google-icon.svg';
import facebookIcon from '../../assets/Image-home-page/facebook-icon.svg';
import hideIcon from '../../assets/Image-home-page/hide.svg';

export const LogInPage = () => {
  const [email, setEmail] = useState<string>();
  function verifyEmail(value: string) {
    setEmail(value);
  }
  console.log('email', email);
  return (
    <div className="conteiner-page">
      <div className="circle"></div>
      <div className="conteiner-1">
        <div className="log">Log in</div>
        <div className="sign-up">
          Don’t have an ccount?
          <div className="sign-up">Sign up</div>
        </div>
      </div>

      <div className="conteiner-2">
        <button className="log-in-facebook">
          <div className="first-button">
            <div>
              <img className="facebook-button" src={facebookIcon} alt="icon" />
            </div>
            <div> Log in with Facebook</div>
          </div>
        </button>

        <button className="log-in-google">
          <div className="second-button">
            <div>
              <img className="google-button" src={googleIcon} alt="icon" />
            </div>
            <div> Log in with Google</div>
          </div>
        </button>
        <div className="lines">
          <div>
            <hr className="underline" />
          </div>
          <div className="or">OR</div>
          <div>
            <hr className="underline" />
          </div>
        </div>
      </div>
      <form id="form">
        <div className="conteiner-3">
          <div className="first-input">
            <div className="txt">Your email</div>
            <input onChange={(e) => verifyEmail(e.target.value)} type="text" name="enter" id="email" />
            <p id="errorEmail"></p>
          </div>

          <div className="second-input">
            <div className="pass">
              <div className="pass-1">
                <div className="txt">Your password</div>
              </div>

              <div className="pass-2">
                <img src={hideIcon} alt="icon" />
                <div className="txt">Hide</div>
              </div>
            </div>
            <input  type="password" name="enter" id="password" />
            <p id="errorPass"></p>
            <div className="forget">Forget your password</div>
          </div>
          <button type="submit" className="log-in" id="log-in">
            <div className="third-button">
              <div>Log in</div>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};
