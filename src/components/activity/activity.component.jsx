import React from "react";

import ActivityItem from "./activity-item.component";

import HeartIcon from "./../../assets/svg/heart.svg";

const Activity = () => {
  return (
    <div className="activity">
      <header>Recent Activity</header>
      <ActivityItem title="HIV Blood Draw Test" price="A100" icon={HeartIcon} />
      <ActivityItem title="TB Radiology XRay" price="A30" icon={HeartIcon} />
      <ActivityItem
        title="Blood Pressure Check"
        price="A10"
        icon={HeartIcon}
        bottom
      />
    </div>
  );
};
export default Activity;
