/* eslint-disable jsx-a11y/label-has-associated-control */
import './EmailInput.scss';
import React, { useState } from 'react';

export const EmailInput = () => {
  const [firstName, setFirstName] = useState('');
  const [enter, setEnter] = useState(false);

  if (firstName.length > 1) {
    setEnter(true);
  }

  return (
    <>
      <form>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your e-mail address"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        {enter && firstName.length <= 0 ? <label>Thank You For Subscribing!</label> : ''}
      </form>
    </>
  );
};
