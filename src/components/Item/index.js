import React, { useState } from "react";
import './style.css'
import { useNavigate } from 'react-router-dom';

export const Item = ({ id, brand, model, image, price}) => {
  const navigate = useNavigate();

  return (
    <div
      key={Item.id}
      className="card col-md-4"
    >
      <div className="card-img-top">
        <img src={image} alt="" className="w-100" style={{height: "200px",  borderRadius: 7}} />
      </div>
      <div className="card-tittle" style={{fontFamily: "Bebas Neue"}}>{`${brand} - ${model}`}</div>
      <div className="card-text">{`U$D ${price} `}</div>

      <button onClick={() => {
        navigate(`/detail/${id}`)
      }} className="ButtonDetails">
          view details
          </button>   
    </div>
  );
};
