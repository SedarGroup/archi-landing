import React from "react";

const ValueProps = ({ items = [] }) => (
  <div className="sg-props">
    {items.map((item) => (
      <div className="sg-prop" key={item.id}>
        <span className={`sg-prop__icon ${item.icon}`} aria-hidden="true"></span>
        <h3 className="sg-prop__title">{item.title}</h3>
        <p className="sg-prop__text">{item.text}</p>
      </div>
    ))}
  </div>
);

export default ValueProps;
