import React from "react";
import Balance from "../balance/balance.component";
import Currency from "../currency/currency.component";
import Header from "../header/header.component";
import Navigation from "../navigation/navigation.component";

const Container = () => {
  return (
    <div>
      <Header />
      <main>
        <Balance />
        <Currency />
      </main>
      <Navigation />
    </div>
  );
};

export default Container;
