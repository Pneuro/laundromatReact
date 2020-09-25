import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import phone_maintenance from "./static/SVGs/phone_maintenance.svg";
import community from "./static/images/community.jpg";
function Promise() {
  const heart = <FontAwesomeIcon icon={faHeart} />;
  return (
    <div className="promise">
      <img src={phone_maintenance} alt="idk" />
      <div className="content">
        <h3>
          {heart} Our Customer Promise {heart}
        </h3>
        <p>
          Our promise is to cleanliness. Our dedication is to a clean
          laundromat. Weekly and monthly maintenance routines ensure that our
          equipment is functioning. <br></br><img src={community} alt="community holding hands" className="community-image"/>Daily cleaning routines ensure the
          health and safety of our customers. Your clothes represent who you
          are, your appearance and presentation, and we respect that. If you
          trust us with your clothes we'll make sure they're clean every time.
          From our family to yours. <br></br>
          -Huron Lakeshore Laundry-
        </p>
      </div>
    </div>
  );
}

export default Promise;
