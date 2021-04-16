import React from "react";

import "./balance.scss";

const Balance = () => {
  return (
    <div className="overall">
      <div>
        <div className="circle">
          <p>AFYA</p>
        </div>
        <p>143.00</p>
        <p> Balance </p>
      </div>
      <div className="separator" />
      <div>
        <div className="circle">
          <p>ZAR</p>
        </div>
        <p>R21.00</p>
        <p> Equivalent </p>
      </div>
    </div>
  );
};
export default Balance;
