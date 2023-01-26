import React from "react";
function Collections({ title, content, imgSrc }) {
  return (
    <div className="collections">
      <div className="single_item">
        <span style={{ wordWrap: "break-word" }}>{title}</span>
        {/* <img src={imgSrc} alt="" style={{ margin: "auto" }} /> */}
        <img src={imgSrc} alt="" />
        <span style={{ color: "#7caec2", wordWrap: "break-word" }}>
          {content}
        </span>
      </div>
    </div>
  );
}

export default Collections;
