import React from "react";
import shirt from "./shirt.jpeg";
export default function Shop() {
  return (
    <div className="shop"
     
    >
      <h1>Shop</h1>
      <div className="card">
        <p>Buy my shirt</p>
        <img src={shirt} alt="Shirt" />
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}
