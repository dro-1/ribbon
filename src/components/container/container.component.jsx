import React, { useState } from "react";
import Activity from "../activity/activity.component";
import Balance from "../balance/balance.component";
import Currency from "../currency/currency.component";
import Header from "../header/header.component";
import Navigation from "../navigation/navigation.component";

import "./container.scss";

const Container = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const setDisplay = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Balance />
            <Currency />
            <Activity />
          </>
        );
      case "activity":
        return (
          <>
            <p> This is the activity page </p>
          </>
        );
      case "market":
        return (
          <>
            <p> This is the market page </p>
          </>
        );
      case "wallet":
        return (
          <>
            <p> This is the wallet page </p>
          </>
        );
      case "earn":
        return (
          <>
            <p> This is the earn page </p>
          </>
        );
      default:
        return <p>There was an error</p>;
    }
  };

  return (
    <div>
      <Header />
      <main>{setDisplay()}</main>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Container;
