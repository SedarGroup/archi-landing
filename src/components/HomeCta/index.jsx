import React from "react";
import Link from "next/link";

const HomeCta = () => (
  <section className="sg-cta">
    <div className="container">
      <div className="sg-cta__inner">
        <div className="sg-cta__text">
          <span className="sg-cta__eyebrow">Parlons de votre projet</span>
          <h2>Décrivez-nous votre projet, nous vous répondons sous 48 heures.</h2>
          <p>
            Construction, rénovation, acquisition ou simple recherche d&apos;architecte : exposez
            votre besoin en quelques minutes et recevez une première estimation gratuite.
          </p>
        </div>
        <div className="sg-cta__actions">
          <Link href="/services/construire-ma-maison">
            <a className="sg-btn sg-btn--light">Décrire mon projet</a>
          </Link>
          <a className="sg-btn sg-btn--outline-light" href="tel:+221784446002">
            <i className="pe-7s-call" aria-hidden="true"></i>
            +221 78 444 60 02
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HomeCta;
