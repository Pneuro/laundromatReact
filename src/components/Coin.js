import React from "react";
import washers from "./static/images/washers.jpeg";

function Coin() {
  return (
    <div className="coin">
      <div className="content-coin">
        <h2>Coin Operated Machines</h2>
        <p>
          <a href="https://www.electroluxprofessional.com/commercial-laundry-equipment/commercial-washers/">
            Electrolux
          </a>
          , <a href="https://laundrylux.com/wascomat/">Wascomat</a> machines
          maintained continously to ensure your clothes are clean every time,
          and if they're not <a href="/contact">let us know!</a>
          </p>
          <h3>About the machines</h3>
            <h4>Washers</h4>
          
          <ul>
            <li>
              2 load machine = <strong>$3.25</strong> / $1.62/load
            </li>
            <li>
              3 load machine = <strong>$4.25</strong> / $1.42/load
            </li>
            <li>
              4 load machine = <strong>$5.50</strong> / $1.38/load
            </li>
            <li>
              6 load machine = <strong>$6.25</strong> / $1.13/load
            </li>
            <h4>Dryers</h4>
            <li>All dryers require $.75 to start. </li>
            <li>
              Additional quarters will allow more time, as long as the time has
              not depleted.
            </li>
            <li>Lint traps and barrels checked daily for your convenience.</li>
          </ul>
        
      </div>
        <img src={washers} alt="Electrolux washers" />
    </div>
  );
}

export default Coin;
