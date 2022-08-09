import React from "react";

export default function MenuList({ dish, onAdd }) {
  return (
    <div className="menu-list">
      <div className="img-field">
        <img src={dish.photoPath} alt="car" />
      </div>
      <div className="content-field">
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>
        <div className="price">${dish.price}</div>
        <div>
          <button className="btn btn-primary" onClick={() => onAdd(dish)}>
            Add to Cart
          </button>
        </div>
      </div>
      <br></br>
    </div>
  );
}
