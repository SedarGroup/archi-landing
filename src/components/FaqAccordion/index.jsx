import React from "react";

const FaqAccordion = ({ items = [] }) => {
  const [openId, setOpenId] = React.useState(items.length ? items[0].id : null);

  return (
    <div className="sg-faq">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            className={`sg-faq__item ${isOpen ? "is-open" : ""}`}
            key={item.id}
          >
            <button
              type="button"
              className="sg-faq__q"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              {item.question}
              <span className="sg-faq__icon" aria-hidden="true"></span>
            </button>
            <div className="sg-faq__a">
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
