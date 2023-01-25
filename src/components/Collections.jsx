import React from "react";
function Collections({ title, content, imgSrc }) {
  return (
    <div className="collections">
      <div className="single_item">
        <span>{title}</span>
        <img src={imgSrc} alt="" />
        <span>{content}</span>
      </div>
    </div>
  );
}

export default Collections;
