import React from "react";
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.picture} alt={props.alt || "Image"} />
      <div className="card-content">
        <h2 className="product-name">{props.name}</h2>
        <h5 className="product-price">${props.price}</h5>
        <p className="description">{props.about}</p>
        <button className="button">Add to Bag</button>
      </div>
    </div>
  );
};

export default Card;
