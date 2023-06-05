import { Rate } from 'antd';
import RatingStars from '../components/RatingStars/RatingStars';

interface ProductProps {
  imageSrc: string;
  description: string;
  price: string;
  link: string;
}

export const Product = (props: ProductProps) => {
  const { description, imageSrc, link,price} = props;
  return (
    <div className="product-image-1">
      <img className="towelImage" src={imageSrc} alt="towelImage" />
      <div className="conteiner-1-1">
        <div className="txt-1">{description}</div>
        <div className="RatingStars"> <RatingStars /> </div>
        <div className="txt-2">{price}</div>
      </div>
    </div>
  );
};