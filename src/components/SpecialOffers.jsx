import React from "react";
import special_item from "../images/special_item.png";

function SpecialOffers() {
  return (
    <div className="side_card">
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
      <img src={special_item} alt="" />
    </div>
  );
}

export default SpecialOffers;
