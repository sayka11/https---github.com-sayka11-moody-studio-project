import './LogIn.scss';
import { useState } from 'react';
import * as yup from 'yup';
import LogInBack from '../../assets/Image-home-page/logInBack.webp';
import googleIcon from '../../assets/Image-home-page/google-icon.svg';
import facebookIcon from '../../assets/Image-home-page/facebook-icon.svg';
import hideIcon from '../../assets/Image-home-page/hide.svg';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import HideInput from "./components/HideInput";



const schema = yup
  .object({
   
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const LogInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // api call will be here a bit later =)
  const onSubmit = (data: FormData) => console.log(data);
  const [email, setEmail] = useState<string>();
  function verifyEmail(value: string) {
    setEmail(value);
  }
  console.log('email', email);
  return (
    <div className="LogIn-Wrapper">
    <div className="log-in-page">
      <div className="circle"></div>
      <div className="conteiner-1">
        <div className="log">Log in</div>
        <div className="sign-up">
          Don’t have an ccount?
          <div className="sign-up">
          <a className='signUpLink' href="/signUp">Sign up</a></div>
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
      <form id="form" onSubmit={handleSubmit(onSubmit)}>

        <div className="conteiner-3">
          <div className="first-input">
            <div className="txt">Your email</div>
            <input  type="text" {...register('email')} id="email" />
            <p className="validation-error">{errors.email?.message}</p>
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
            <input type="password" {...register('password')} id="password" />
            <p className="validation-error">{errors.password?.message}</p>
            <div className="forget"><a className='forgetYourPass' href="/edit">Forget your password</a></div>
          </div>
          <button type="submit" className="log-in" id="log-in">
            <div className="third-button">
              <div>Log in</div>
            </div>
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};
