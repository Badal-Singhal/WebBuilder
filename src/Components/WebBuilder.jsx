import React from "react";

export default function WebBuilder({
  src,
  heading,
  text,
  offer,
  offer_price,
  original_price,
}) {
  return (
    <>
      <div className="webBlock">
        <div className="webImage">
          <img src={src} alt="logo" />
        </div>
        <div className="offerGrid">
          <div className="offer">
            <p id="abc">{offer.offer1}</p>
          </div>
          <div className="offer">
            <p id="abc">{offer.offer2}</p>
          </div>
        </div>
        <div className="webHeading">
          <strong>{heading}</strong>
        </div>
        <div>
          <p>{text}</p>
        </div>
        <div className="price">
          <div className="offerPrice">{offer_price}</div>
          <div className="originalPrice">{original_price}</div>
          <div className="offertag">({offer.offer1})</div>
        </div>
        <div className="dealBtn">
        <button className="component-btn">View Deal</button>
        </div>
      </div>
    </>
  );
}
