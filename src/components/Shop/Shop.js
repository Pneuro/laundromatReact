import React from "react";
import shirt from "./shirt.jpeg";
export default function Shop() {
  return (
    <div className="shop">
      <h1>Shop</h1>
      <div className="card">
        <p>White Logo Shirt</p>
        <a
          href="https://teespring.com/main-logo-5600?tsmac=store&tsmic=my-store-10022542&pid=2&cid=2122"
          className="shirt-link"
        >
          <img
            href="https://teespring.com/main-logo-5600?tsmac=store&tsmic=my-store-10022542&pid=2&cid=2122"
            src={shirt}
            alt="Shirt"
          />
        </a>
        <h3>Cotton</h3>
        <p>$24.99 + shipping and handling</p>
        <a href="https://teespring.com/main-logo-5600?tsmac=store&tsmic=my-store-10022542&pid=2&cid=2122">
          <button href="https://teespring.com/main-logo-5600?tsmac=store&tsmic=my-store-10022542&pid=2&cid=2122">
            Click for more info
          </button>
        </a>
      </div>
    </div>
  );
}
