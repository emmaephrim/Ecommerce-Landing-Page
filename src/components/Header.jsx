import React from "react";
import shop_Logo from "../images/Plenuu_logo.png";

function Header() {
  return (
    <React.Fragment>
      <header>
        <img src={shop_Logo} alt="" />
      </header>
    </React.Fragment>
  );
}

export default Header;
