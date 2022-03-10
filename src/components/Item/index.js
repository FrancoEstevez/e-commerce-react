import React, { useState } from "react";
import {getItemDetails} from "../../helpers/getItemDetails"
import './style.css'

export const Item = ({ brand, model, image, price}) => {
  const onAdd = (item) => console.log(item);
  const [isExpanded, setIsExpanded] = useState(false)
  const [itemDetails, setItemDetails] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const openDetails = () => {
    setIsExpanded (true)

    const fetchItemDetails = async () => {
      try {
        setIsLoading(true)
        const productDetails = await getItemDetails();
        setItemDetails(productDetails);
      } catch {
        console.error("Couldn't get products :(");
      } finally {
        setIsLoading(false);
      };
    }
    !itemDetails && fetchItemDetails()
  }

  const closeDetails = () => {
    setIsExpanded (false);
  }
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

      <button className="ButtonDetails" onClick={() => {
        isExpanded ? closeDetails() : openDetails();
      }} >{isExpanded ? "close details" : "view details"}</button>

      {isExpanded && (isLoading ? <p>loading details</p> : (
        <div>
          <div>{`Motor: ${itemDetails.motor}`}</div>
          <div>{`horsepower: ${itemDetails.horsepower}`}</div>
        </div>
      ))}

    </div>
  );
};
