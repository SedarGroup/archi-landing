import React from "react";

const PriceTiers = ({ items = [], note }) => (
  <>
    <div className="sg-tiers">
      {items.map((item, index) => (
        <div className="sg-tier" key={item.id}>
          <span className="sg-tier__index">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="sg-tier__title">{item.title}</h3>
          <p className="sg-tier__price">{item.price}</p>
          <p className="sg-tier__text">{item.text}</p>
        </div>
      ))}
    </div>
    {note && <p className="sg-note">{note}</p>}
  </>
);

export default PriceTiers;
