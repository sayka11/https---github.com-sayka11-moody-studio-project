interface ProductProps {
  imageSrc: string;
  description: string;
  price: string;
  link: string;
}

export const Product = (props: ProductProps) => {
  const { description, imageSrc, link,price} = props;
  return (
    <div className="product-image">
      <img className="towelImage" src={imageSrc} alt="towelImage" />
      <div className="cont-3-2">
        <div className="txt-1">{description}</div>
        <div className="RatingStars">
        </div>
        <div className="txt-2">{price}</div>
      </div>
    </div>
  );
};
