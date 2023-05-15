/* eslint-disable jsx-a11y/label-has-associated-control */
import './Rating.scss';
import React from 'react';

export const Rating = () => {
  return (
    <div className="simpleRating">
      <div className="simpleRatingItems">
        <input id="simpleRating5" type="radio" className="simpleRatingItem" name="simpleRating" value="5" />
        <label htmlFor="simpleRating5" className="simpleRatingLabel"></label>
        <input id="simpleRating4" type="radio" className="simpleRatingItem" name="simpleRating" value="4" />
        <label htmlFor="simpleRating4" className="simpleRatingLabel"></label>
        <input id="simpleRating3" type="radio" className="simpleRatingItem" name="simpleRating" value="3" />
        <label htmlFor="simpleRating3" className="simpleRatingLabel"></label>
        <input id="simpleRating2" type="radio" className="simpleRatingItem" name="simpleRating" value="2" />
        <label htmlFor="simpleRating2" className="simpleRatingLabel"></label>
        <input id="simpleRating1" type="radio" className="simpleRatingItem" name="simpleRating" value="1" />
        <label htmlFor="simpleRating1" className="simpleRatingLabel"></label>
      </div>
    </div>
  );
};
