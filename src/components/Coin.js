import React from "react";

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
          <h3>About the machines</h3>
          <ul>
            <h4>Washers</h4>
            <li>2 load machine = $3.25 / $1.62/load</li>
            <li>3 load machine = $4.25 / $1.42/load</li>
            <li>4 load machine = $5.50 / $1.38/load</li>
            <li>6 load machine = $6.25 / $1.13/load</li>
            <h4>Dryers</h4>
            <li>All dryers require $.75 to start. </li>
            <li>
              Additional quarters will allow more time, as long as the time has
              not depleted.
            </li>
            <li>Lint traps and barrels checked daily for your convenience.</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Coin;
