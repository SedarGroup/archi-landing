import React from "react";

const StepsTimeline = ({ items = [] }) => (
  <div className="sg-steps">
    {items.map((item) => (
      <div className="sg-step" key={item.id}>
        <span className="sg-step__num">{item.id}</span>
        <h3 className="sg-step__title">{item.title}</h3>
        <p className="sg-step__text">{item.text}</p>
      </div>
    ))}
  </div>
);

export default StepsTimeline;
