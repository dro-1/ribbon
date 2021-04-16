import React from "react";

const NavButton = ({ text, icon, setCurrentPage, active }) => {
  return (
    <button onClick={() => setCurrentPage(text.toLowerCase())}>
      <div>
        <img src={icon} alt="Home Link" />
        <p className={active ? "active" : ""}>{text}</p>
      </div>
    </button>
  );
};
export default NavButton;
