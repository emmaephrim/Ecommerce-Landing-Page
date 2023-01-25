import React from "react";
import shop_Logo from "../images/Plenuu_logo_main.png";

function Header() {
  return (
    <React.Fragment>
      <header>
        <div className="sub-head-one">
          <img src={shop_Logo} alt="" />
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Vendor</li>
            <li>
              <i className="bi bi-list"></i>
            </li>
          </ul>
        </div>
        <div className="sub-head-two">
          <form>
            <input type="search" placeholder="Search..." name="search" />
            <button type="submit" className="btn btn-outline">
              <i class="bi bi-search"></i>
            </button>
          </form>
          <ul>
            <li style={{ marginLeft: "-10px" }}>
              <i class="bi bi-cart2"></i>
            </li>
            <li style={{ marginLeft: "20px", marginRight: "5px" }}>
              <i class="bi bi-person"></i>
            </li>
          </ul>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
