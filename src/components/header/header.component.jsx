import React from "react";

import ProfileIcon from "./../../assets/svg/profile.svg";
import NotificationIcon from "./../../assets/svg/bell.svg";

import "./header.scss";

const Header = () => {
  return (
    <header>
      <p>ribbon</p>
      <div>
        <img src={ProfileIcon} alt="Profile" />
        <img src={NotificationIcon} alt="Notifications" />
      </div>
    </header>
  );
};
export default Header;
