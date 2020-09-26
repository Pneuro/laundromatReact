import React from "react";
import busidec from "./static/SVGs/business_decisions.svg";
function About() {
  return (
    <div className="about">
      <div className="content-about">
        <h2>Who Are We?</h2>
        <p>
          A small business about the community. Providing as many services as
          possible with the community in mind. Huron is a great city, and thus
          deserves this reputation be respected in all fronts.
        </p>
        <h2>Affiliates</h2>
        <p>Huron Chamber of Commerce</p>
      </div>
        <img src={busidec} alt="Business Decisions" />
    </div>
  );
}

export default About;
