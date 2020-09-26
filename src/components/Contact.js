import React from "react";
import contact from "./static/SVGs/contact.svg";
function Contact() {
  return (
    <div className="contact">
      <div>
        <div className="content">
          <h2>Contact</h2>
          <p>
            We love to hear your feedback! Please give us the opportunity to
            hear your story and experience with our store. We appreciate your
            business. Find us on{" "}
            <a href="www.facebook.com/huronlakeshorelaundry/">Facebook.</a>
          </p>

          <a href="mailto:huronlakeshorelaundry@gmail.com">Contact Us Today!</a>
          <br></br>
          <a
            className="accredit"
            href="https://www.freepik.com/vectors/business"
          >
            Business vector created by stories - www.freepik.com
          </a>
        </div>
      </div>
      <img src={contact} alt="Contact Us!" />
    </div>
  );
}

export default Contact;
