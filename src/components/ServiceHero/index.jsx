import React from "react";
import Link from "next/link";

const ServiceHero = ({
  image,
  eyebrow,
  title,
  subtitle,
  breadcrumb = [],
  primaryCta,
  secondaryCta,
}) => {
  const renderCta = (cta, className) => {
    if (!cta) return null;
    if (cta.onClick) {
      return (
        <button type="button" onClick={cta.onClick} className={className}>
          {cta.label}
        </button>
      );
    }
    return (
      <Link href={cta.href}>
        <a className={className}>{cta.label}</a>
      </Link>
    );
  };

  return (
    <header
      className="sg-hero"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container">
        <div className="sg-hero__inner">
          {breadcrumb.length > 0 && (
            <nav className="sg-hero__breadcrumb" aria-label="Fil d'ariane">
              {breadcrumb.map((item, index) => (
                <React.Fragment key={item.id}>
                  {index === breadcrumb.length - 1 ? (
                    <span className="is-active">{item.name}</span>
                  ) : (
                    <>
                      <Link href={item.url}>
                        <a>{item.name}</a>
                      </Link>
                      <span>/</span>
                    </>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          {eyebrow && <span className="sg-hero__eyebrow">{eyebrow}</span>}
          <h1 className="sg-hero__title">{title}</h1>
          {subtitle && <p className="sg-hero__subtitle">{subtitle}</p>}

          <div className="sg-hero__actions">
            {renderCta(primaryCta, "sg-btn")}
            {renderCta(secondaryCta, "sg-btn sg-btn--outline-light")}
          </div>
        </div>
      </div>
      <span className="sg-hero__scroll" aria-hidden="true"></span>
    </header>
  );
};

export default ServiceHero;
