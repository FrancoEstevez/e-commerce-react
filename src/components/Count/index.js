import React, { useState } from "react";
import '../ItemDetail/style.css'

const Count = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  const Add = () => {
    onAdd(count);
  };

  return (
    <div className="containerCount container">
      <div className="borderCount border">
        <button className="btnCount btn" onClick={decrement}>
          {" "}
          -{" "}
        </button>
        <p className="textCount">{count}</p>
        <button className="btnCount btn" onClick={increment}>
          {" "}
          +{" "}
        </button>
      </div>
      <button className="addBtnCount btn" onClick={Add}>
        <p style={{color: "white"}}>add</p>
      </button>
    </div>
  );
};

export default Count;
