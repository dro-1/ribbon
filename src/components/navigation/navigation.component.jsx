import React, { useState } from "react";

import HomeIcon from "./../../assets/svg/home.svg";
import ActivityIcon from "./../../assets/svg/activity.svg";
import WalletIcon from "./../../assets/svg/wallet.svg";
import MarketIcon from "./../../assets/svg/market.svg";
import EarnIcon from "./../../assets/svg/earn.svg";

import HomeInactiveIcon from "./../../assets/svg/homeInactive.svg";
import ActivityInactiveIcon from "./../../assets/svg/activityInactive.svg";
import WalletInactiveIcon from "./../../assets/svg/walletInactive.svg";
import MarketInactiveIcon from "./../../assets/svg/marketInactive.svg";
import EarnInactiveIcon from "./../../assets/svg/earnInactive.svg";

import NavButton from "../nav-button/nav-button.component";

import "./navigation.scss";

const Navigation = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <nav>
      <NavButton
        setCurrentPage={setCurrentPage}
        icon={currentPage === "home" ? HomeIcon : HomeInactiveIcon}
        text="Home"
        active={currentPage === "home"}
      />
      <NavButton
        setCurrentPage={setCurrentPage}
        icon={currentPage === "activity" ? ActivityIcon : ActivityInactiveIcon}
        text="Activity"
        active={currentPage === "activity"}
      />
      <NavButton
        setCurrentPage={setCurrentPage}
        icon={currentPage === "wallet" ? WalletIcon : WalletInactiveIcon}
        text="Wallet"
        active={currentPage === "wallet"}
      />
      <NavButton
        setCurrentPage={setCurrentPage}
        icon={currentPage === "market" ? MarketIcon : MarketInactiveIcon}
        text="Market"
        active={currentPage === "market"}
      />
      <NavButton
        setCurrentPage={setCurrentPage}
        icon={currentPage === "earn" ? EarnIcon : EarnInactiveIcon}
        text="Earn"
        active={currentPage === "earn"}
      />
    </nav>
  );
};
export default Navigation;
