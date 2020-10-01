import React from "react";
import resting from "./static/SVGs/resting__isometric.svg";
function Washfold() {
  return (
    <div className="washfold">
      <div className="content">
        <img src={resting} alt="idk" />
        <h2>Wash Dry Fold & Drop Off Services</h2>
        <p>
          Our facility allows drop off for all laundry services by appointment
          only. Drop off your laundry and relax or focus on something more
          pressing than your chores. Leave that to us!
        </p>
        <h3>Residential Laundry Service</h3>
        <ul>
          <h4>24 Hour Service</h4>
          <li>$1.29/pound = $9.03/load</li>
          <h4>Same Day Service</h4>
          <li> $1.69/pound = ${1.69 * 8}/load</li>
        </ul>
      </div>
    </div>
  );
}

export default Washfold;
