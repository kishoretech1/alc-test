import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardContainer = () => {
  const [cards, setCards] = useState();
  useEffect(() => {
    if (!cards) {
      fetch("http://localhost:3035/")
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setCards(res);
        });
    }
  }, [cards]);
  debugger;
  return (
    <div className="cards-container">
      {cards && cards.map((card) => <Card {...card} />)}
    </div>
  );
};
export default CardContainer;
