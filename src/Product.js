import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>the lean sturtup</p>
      </div>

      <p className="product__price">
        <small>$</small>
        <strong>12.34</strong>
      </p>
    </div>
  );
}

export default Product;
