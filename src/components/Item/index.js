import React, { useState } from "react";
import './style.css'

export const Item = ({ brand, model, image, price}) => {
  return (
    <div
      className="card col-md-4"
      style={{width: 350, margin: 50, display: 'inline-block', borderRadius: 8}}
    >
      <div className="card-img-top">
        <img src={image} alt="" className="w-100" style={{height: "200px",  borderRadius: 7}} />
      </div>
      <div className="card-tittle" style={{fontFamily: "Bebas Neue"}}>{`${brand} - ${model}`}</div>
      <div className="card-text">{`${price} U$D`}</div>
      <div className="card-footer" style={{backgroundColor: "#333333", borderRadius: 7}}>
      <button className="buyButton">Buy</button>
      </div>

      <button className="ButtonDetails">view details</button>
    </div>
  );
};
