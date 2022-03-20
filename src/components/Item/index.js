import React, { useState } from "react";
import './style.css'
import { useNavigate } from 'react-router-dom';


export const Item = ({ id, brand, model, image, price}) => {
  const navigate = useNavigate();

  return (
    <div
      key={Item.id}
      className="card col-md-4"
      style={{width: 350, margin: 50, display: 'inline-block', borderRadius: 8}}
    >
      <div className="card-img-top">
        <img src={image} alt="" className="w-100" style={{height: "200px",  borderRadius: 7}} />
      </div>
      <div className="card-tittle" style={{fontFamily: "Bebas Neue"}}>{`${brand} - ${model}`}</div>
      <div className="card-text">{`U$D ${price} `}</div>
      <div className="card-footer" style={{backgroundColor: "#333333", borderRadius: 7}}>
      <button className="buyButton">Buy</button>
      </div>

      <button onClick={() => {
        navigate(`/detail/${id}`)
      }} className="ButtonDetails">
          view details
          </button>   

{/* 
      <Link to={`detail/${id}`} >
        <button className="ButtonDetails">
          view details
          </button>                                          
      </Link> */}

      
    </div>
  );
};
