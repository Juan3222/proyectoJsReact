import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = (prop) => {
  const greetingStyle = {
    fontSize: 100,
    marginTop: "10rem",
    color: "green",
  };
  return <h2 style={greetingStyle}>{prop.greeting}</h2>;
};

export default ItemListContainer;
