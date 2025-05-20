import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const { title, body, price, img, id } = props;

  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="product-img" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{body}</p>
        <p className="card-price">{price}</p>
      </div>
      <button className="card-button">
        <Link to={`/products/${id}`}>Подробнее</Link>
      </button>
    </div>
  );
}

export default ProductCard;
