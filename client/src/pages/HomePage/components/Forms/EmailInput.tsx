/* eslint-disable jsx-a11y/label-has-associated-control */
import './EmailInput.scss';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import emailIcon from '../../../../assets/Image-home-page/email-icon.png';

const schema = yup
  .object({
    email: yup.string().required().email(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;
export const EmailInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => setSubscribingSuccess(true);
  const [subscribingSuccess, setSubscribingSuccess] = useState(false);

  return (
    <div className="subscription-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="email" id="email" placeholder="Enter your e-mail address" {...register('email')} />
        </div>
        <button id="emailButton">
          <img className="emailImage" src={emailIcon} alt="" />
        </button>
      </form>
      {subscribingSuccess && <label>Thank You For Subscribing!</label>}
      <p className="validation-error">{errors.email?.message}</p>
    </div>
  );
};
