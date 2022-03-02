import React, { useState } from "react";
import Tittle from "../Tittle";
import Count from "../Count";

const onAdd = (cant) => {
  console.log(cant);
};

const ItemListContainer = () => {
  return (
    <div>
    <Tittle tittle= {'Tittle'} subtittle='Subtittle' greeting={() => console.log('Saludos')}/>
      <Count initial={1} stock={9} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
