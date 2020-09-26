import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  burgerNavActive,
  burgerNavInactive,
  weatherNavActive,
  weatherNavInactive,
} from "./NavSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faPhoneSquare,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import NavLinks from "./NavLinks";
import Weather from "../Weather";

function Nav(props) {
  // Icons
  const element = <FontAwesomeIcon icon={faPhoneSquare} />;
  const compass = <FontAwesomeIcon icon={faCompass} />;
  const cloud = <FontAwesomeIcon icon={faCloud} />;

  // State Management
  const [navActive, setNavActive] = useState(false);
  const [navState1, setNavState1] = useState("");
  const [navState2, setNavState2] = useState("");
  const [navState3, setNavState3] = useState("");
  const [navStateMenu, setNavStateMenu] = useState("");
  const [cloudActive, setCloudActive] = useState("weather-hidden");

  const burger = () => {
    if (navActive === true) {
      setNavActive(false);
      setNavState1("");
      setNavState2("");
      setNavState3("");
      setNavStateMenu("");
    } else {
      setNavActive(true);
      setNavState1("active-1");
      setNavState2("active-2");
      setNavState3("active-3");
      setNavStateMenu("active-menu");
    }
  };

  const weatherState = () => {
    if (cloudActive === "weather-hidden") {
      console.log(cloudActive);
      setCloudActive("weather-active");
    } else if (cloudActive === "weather-active") {
      setCloudActive("weather-hidden");
    }
  };

  return (
    <div>
      <nav className="nav">
        <div onClick={burger} className="burger">
          <div className={`line-1 ${navState1}`}></div>
          <div className={`line-2 ${navState2}`}></div>
          <div className={`line-3 ${navState3}`}></div>
        </div>
        <NavLinks state={navStateMenu} />

        <img
          className="img-style"
          src={props.image}
          alt="Huron Lakeshore Laundry Logo"
        ></img>
        <Weather cloudActive={cloudActive} />
        <div className="contacter">
          <div id="buttons">
            <a className="con-button" id="phone-number" href="tel:4194337627">
              419-433-7627 <span className="phone-square">{element}</span>
            </a>
            <a
              class="con-button"
              href="https://www.google.com/maps/dir//huron+lakeshore+laundry/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x883a6b7fa41af895:0x1c2648b4fc6d4954?sa=X&ved=2ahUKEwjMj9a91t3rAhX6B50JHUkNA7YQ9RcwPHoECDwQBA"
            >
              Directions {compass}
            </a>
            <a class="cloud con-button" onClick={weatherState}>
              {cloud}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
