import React from "react";
import linens from "./static/images/white-linens.jpeg";
function Commercial() {
  return (
    <div className="commercial">
      <img src={linens} alt="Commercial Linens" />
      <div className="content">
        <h2>Commercial</h2>
        <p>
          Gyms, Spas, Hotels, Restaurants, Healthcare and more. We're here to
          handle this portion of your business, while you go get more customers.
        </p>
        <h3>Commercial Laundry Service</h3>
        <ul>
          <h4>24 hours service</h4>
          <li>$1.09/pound = $9.03/load</li>
          <h4>Same Day service</h4>
          <li> $1.69/pound = ${1.69 * 8}/load</li>
        </ul>
      </div>
    </div>
  );
}

export default Commercial;
