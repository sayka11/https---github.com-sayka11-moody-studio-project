import { Rating } from './RatingStars/Rating';

export interface TopRatingProps {
  imageSrc: string;
  description: string;
  price: string;
  link: string;
}

export const TopRating = (props: TopRatingProps) => {
  const { description, imageSrc, link, price } = props;
  return (
    <div className="product-image-2">
      <img className="towelImage" src={imageSrc} alt="towelImage" />
      <div className="conteiner-2">
        <div className="txt-2">{description}</div>
        <div className="RatingStars"> <Rating /> </div>
        <div className="txt-3">{price}</div>
      </div>
    </div>
  );
};
