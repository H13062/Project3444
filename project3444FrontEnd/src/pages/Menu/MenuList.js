import React from "react";

export default function MenuList({ dish, onAdd }) {
  return (
    <div className="menu-list">
      <div>
        <img width="400px" src={dish.photoPath} alt="car" />
      </div>
      <h3>{dish.name}</h3>
      <div>${dish.price}</div>
      <div>
        <button onClick={() => onAdd(dish)}>Add to Cart</button>
      </div>
      <br></br>
    </div>
  );
}
