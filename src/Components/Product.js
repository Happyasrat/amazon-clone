import React from "react";
import "./Product.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log("this is the basket", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_Basket",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <StarRateIcon />
            ))}
        </div>
      </div>
      <img src={image} alt="#" />
      <button onClick={addToBasket}> ADD_TO_BASKET</button>
    </div>
  );
}

export default Product;
