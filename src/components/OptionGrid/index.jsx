/* eslint-disable @next/next/no-img-element */
import React from "react";

const OptionGrid = ({ options = [], selected = [], onToggle }) => (
  <div className="sg-options">
    {options.map((option) => {
      const isSelected = selected.includes(option.id);
      return (
        <button
          type="button"
          key={option.id}
          className={`sg-option ${isSelected ? "is-selected" : ""}`}
          aria-pressed={isSelected}
          onClick={() => onToggle(option.id)}
        >
          <span className="sg-option__media">
            <img src={option.image} alt={option.title} />
            <span className="sg-option__check" aria-hidden="true">
              <i className="fas fa-check"></i>
            </span>
          </span>
          <span className="sg-option__body">
            <span className="sg-option__title">{option.title}</span>
            <span className="sg-option__text">{option.description}</span>
            {option.price && (
              <span className="sg-option__price">{option.price}</span>
            )}
          </span>
        </button>
      );
    })}
  </div>
);

export default OptionGrid;
