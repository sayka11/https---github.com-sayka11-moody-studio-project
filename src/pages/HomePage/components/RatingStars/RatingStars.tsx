/* eslint-disable jsx-a11y/label-has-associated-control */
import { Rating } from '@smastrom/react-rating';
import './RatingStars.scss';
import React from 'react';

export interface IRatingProps {
  count: number;
  size?: number;
  activeColor?: string;
  onChange?: (newRating: number) => void;
}

export const RatingStars = (props: IRatingProps) => {
  const { count, size, activeColor, onChange } = props;
  return <Rating value={count} onChange={onChange} />;
};
