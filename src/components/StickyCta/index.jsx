import React from "react";
import Link from "next/link";
import { onCallClick } from "../../utils";

/**
 * Mobile-only action bar. Appears once the hero is scrolled past so it never
 * competes with the hero's own call to action.
 */
const StickyCta = ({ label, hint, onClick, href, ctaLabel = "Obtenir un devis" }) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add("sg-has-sticky");

    const onScroll = () => setVisible(window.pageYOffset > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.classList.remove("sg-has-sticky");
    };
  }, []);

  return (
    <div className={`sg-sticky ${visible ? "is-visible" : ""}`}>
      <span className="sg-sticky__label">
        <strong>{label}</strong>
        {hint}
      </span>
      <span className="sg-sticky__actions">
        <button
          type="button"
          className="sg-btn sg-sticky__wa"
          onClick={onCallClick}
          aria-label="Nous écrire sur WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </button>
        {href ? (
          <Link href={href}>
            <a className="sg-btn">{ctaLabel}</a>
          </Link>
        ) : (
          <button type="button" className="sg-btn" onClick={onClick}>
            {ctaLabel}
          </button>
        )}
      </span>
    </div>
  );
};

export default StickyCta;
