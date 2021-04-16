import React from "react";

import "./activity.scss";

const ActivityItem = ({ icon, title, price, bottom }) => {
  return (
    <div className={`item ${bottom ? "last" : ""}`}>
      <img src={icon} alt="Medication" />
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};
export default ActivityItem;
