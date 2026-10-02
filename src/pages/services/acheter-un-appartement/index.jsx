/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import LightLayout from "../../../layouts/light";
import ServiceHero from "../../../components/ServiceHero";
import SectionHead from "../../../components/SectionHead";
import ValueProps from "../../../components/ValueProps";
import StepsTimeline from "../../../components/StepsTimeline";
import FaqAccordion from "../../../components/FaqAccordion";
import StickyCta from "../../../components/StickyCta";
import data from "../../../data/services/appartement.json";

const DOCS_ID = "dossier";

const AcheterUnAppartement = () => {
  return (
    <LightLayout
      title="Acheter un appartement | Sédar Group"
      description="Découvrez les appartements disponibles chez Sédar Group, visitez sans engagement et faites-vous accompagner jusqu'à la remise des clés."
    >
      <ServiceHero
        image={data.hero.image}
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        breadcrumb={[
          { id: 1, name: "Accueil", url: "/" },
          { id: 2, name: "Acheter un appartement", url: "/services/acheter-un-appartement" },
        ]}
        primaryCta={{ label: "Voir les appartements", href: "/quote" }}
        secondaryCta={{ label: "Nos réalisations", href: "/work" }}
      />

      <section className="sg-section">
        <div className="container">
          <SectionHead
            eyebrow="Pourquoi Sédar"
            title="Acheter en toute sérénité"
            text="Des biens vérifiés, un dossier accompagné et un conseiller unique qui vous suit de la première visite à la remise des clés."
          />
          <ValueProps items={data.valueProps} />
        </div>
      </section>

      <section className="sg-section sg-section--ivory">
        <div className="container">
          <div className="sg-split">
            <div className="sg-split__body">
              <h2>Achetez un appartement en quelques clics</h2>
              <p>
                Découvrez nos appartements disponibles et faites votre choix en toute simplicité.
                Consultez les offres, sélectionnez le bien qui vous correspond et lancez votre
                démarche d&apos;acquisition directement en ligne.
              </p>
              <p>
                Nos typologies F2, F3 et F4 couvrent aussi bien le premier achat que
                l&apos;investissement locatif. Chaque bien est présenté avec ses surfaces, son
                niveau de finition et ses conditions d&apos;acquisition.
              </p>
              <Link href="/quote">
                <a className="sg-btn">Voir les appartements disponibles</a>
              </Link>
            </div>
            <div className="sg-split__media">
              <img
                src="/assets/img/services/building-permit/22.webp"
                alt="Appartement Sédar Group"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sg-section sg-section--ink">
        <div className="container">
          <SectionHead
            eyebrow="Comment ça marche"
            title="Trois étapes jusqu'aux clés"
            text="Un parcours simple, accompagné à chaque étape par un conseiller Sédar."
          />
          <StepsTimeline items={data.steps} />
        </div>
      </section>

      <section className="sg-section" id={DOCS_ID}>
        <div className="container">
          <div className="sg-split sg-split--reverse">
            <div className="sg-split__media">
              <img
                src="/assets/img/services/building-permit/23.jpg"
                alt="Constitution du dossier"
              />
            </div>
            <div className="sg-split__body">
              <h2>Quels sont les documents à fournir ?</h2>
              <ul className="sg-checklist">
                <li>Une demande manuscrite adressée au maire de la commune territorialement compétente</li>
                <li>Une copie du titre de propriété (titre foncier, permis d&apos;occuper, attestation, bail ou droit de superficie)</li>
                <li>Un plan de situation et de délimitation du terrain d&apos;assiette du projet, certifié exact par le service du Cadastre</li>
                <li>5 jeux de plan de construction architectural (situation, masse, plan, coupe, façade) à l&apos;échelle de 1/100e</li>
                <li>Une fiche de renseignement portant sur le projet de construction</li>
                <li>Un devis descriptif du projet</li>
                <li>Un plan de fosses septiques, ou l&apos;indication du système d&apos;évacuation à l&apos;égout s&apos;il existe</li>
                <li>Une taxe d&apos;urbanisme comprise entre 1 000 et 5 000 FCFA</li>
                <li>Un timbre fiscal de 1 000 FCFA</li>
              </ul>
              <p>Le dossier est composé en sept exemplaires.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sg-section sg-section--ivory">
        <div className="container">
          <SectionHead
            eyebrow="Frais annexes"
            title="Quel est le coût ?"
            text="Le coût total varie selon les localités. Il se répartit entre une taxe d'urbanisme dont le montant varie de 1 000 à 5 000 FCFA, et un timbre fiscal de 1 000 FCFA."
          />
          <div className="sg-options__footer">
            <Link href="/quote">
              <a className="sg-btn">Voir les appartements disponibles</a>
            </Link>
          </div>
        </div>
      </section>

      <section className="sg-section">
        <div className="container">
          <SectionHead eyebrow="Questions fréquentes" title="Vous vous demandez peut-être…" />
          <FaqAccordion items={data.faq} />
        </div>
      </section>

      <StickyCta
        label="Acheter un appartement"
        hint="Visite sans engagement"
        href="/quote"
        ctaLabel="Voir les biens"
      />
    </LightLayout>
  );
};

export default AcheterUnAppartement;
