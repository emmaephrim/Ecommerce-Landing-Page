import React from "react";
import item_8 from "../images/item_8.jpeg";

function SpecialOffers() {
  return (
    <div className="side_bar_item side_item">
      <span
        style={{
          backgroundColor: "#d0e7fe",
          padding: "10px",
          borderRadius: "10px",
          fontWeight: "bolder",
          width: "200px",
          textAlign: "center",
          alignItems: "start",
        }}
      >
        SPECIAL OFFERS
      </span>
      <span>BLACK GREY PASUA</span>
      <span>DRESS</span>
      <span style={{ color: "#4086d9" }}>GHC 250</span>
      <img src={item_8} alt="" srcset="" />
    </div>
  );
}

export default SpecialOffers;
