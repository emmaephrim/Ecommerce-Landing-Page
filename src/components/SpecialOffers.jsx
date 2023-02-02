import React from "react";
import special_item from "../images/special_item.png";

function SpecialOffers() {
  return (
    <div className="side_card">
      <div
        style={{
          backgroundColor: "#d0e7fe",
          paddingTop: "10px",
          paddingLeft: "5px",
          paddingBottom: "10px",
          borderRadius: "15px",
          fontWeight: "bolder",
          fontSize: "140%",
          width: "180px",
          // textAlign: "center",
          // alignItems: "start",
        }}
      >
        SPECIAL OFFERS
      </div>
      <span>BLACK GREY PASUA</span>
      <span>DRESS</span>
      <span style={{ color: "#4086d9" }}>GHC 250</span>
      <img src={special_item} alt="" />
    </div>
  );
}

export default SpecialOffers;
