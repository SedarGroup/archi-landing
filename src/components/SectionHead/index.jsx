import React from "react";

const SectionHead = ({ eyebrow, title, text, center = true }) => (
  <div className={`sg-head ${center ? "sg-head--center" : ""}`}>
    {eyebrow && <span className="sg-head__eyebrow">{eyebrow}</span>}
    <h2 className="sg-head__title">{title}</h2>
    {text && <p className="sg-head__text">{text}</p>}
  </div>
);

export default SectionHead;
