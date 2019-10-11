import React from "react";

const Product = ({ key, productData }) => (
  <div key={key}>
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={productData.image} alt={productData.alt} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{productData.title}</p>
            <p className="subtitle is-6 is-primary">£{productData.price}</p>
          </div>
        </div>

        <div className="content">
          <p>{productData.description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Product;
