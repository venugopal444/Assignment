import React from "react";
import CardData from "../data/CardData";
import './index.css'

const SprintsCard = () => {
  return (
    <div className="Data_card_container ">
      {CardData.map((card, i) => {
        return (
          <div key={i} className="s_card">
            <h2 className="c_text">{card.sprint_name}</h2>
            <h2 className="c_value">{card.sprint_value}</h2>
            <p className="c_note">{card.note}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SprintsCard;