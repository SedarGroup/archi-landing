/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import offersData from "../../data/offers.json";
import SectionHead from "../SectionHead";

const Offers = () => {
  return (
    <section className="sg-section sg-section--tight sg-offers-section" id="offres">
      <div className="container">
        <SectionHead
          eyebrow="Nos offres"
          title="Par où commence votre projet ?"
          text="Quatre parcours, un même interlocuteur. Choisissez le vôtre et recevez une réponse de notre équipe sous 48 heures."
        />
        <div className="sg-offers">
          {offersData.map((item, index) => (
            <Link href={item.url} key={item.id}>
              <a
                className="sg-offer wow fadeInUp"
                data-wow-delay={`.${2 + index}s`}
              >
                <span className="sg-offer__media">
                  <img src={item.image} alt={item.title} />
                </span>
                <span className="sg-offer__body">
                  <span className="sg-offer__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="sg-offer__title">{item.title}</span>
                  <span className="sg-offer__text">{item.text}</span>
                  <span className="sg-offer__more">
                    Découvrir
                    <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </span>
                </span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
