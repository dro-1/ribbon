import React from "react";

import "./currency.scss";

const Currency = () => {
  return (
    <div className="currency">
      <header>Select Currency: </header>
      <div className="input">
        <p>AFYA</p>
        <input type="number" value="0.00000001" step="0.00000001" />
      </div>
      <div className="buttons">
        <button>Send</button>
        <button>Receive</button>
      </div>
    </div>
  );
};
export default Currency;
