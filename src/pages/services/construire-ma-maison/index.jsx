/* eslint-disable @next/next/no-img-element */
import React from "react";
import LightLayout from "../../../layouts/light";
import ServiceHero from "../../../components/ServiceHero";
import SectionHead from "../../../components/SectionHead";
import ValueProps from "../../../components/ValueProps";
import StepsTimeline from "../../../components/StepsTimeline";
import PriceTiers from "../../../components/PriceTiers";
import FaqAccordion from "../../../components/FaqAccordion";
import ProjectBriefForm from "../../../components/ProjectBriefForm";
import StickyCta from "../../../components/StickyCta";
import data from "../../../data/services/construire.json";
import { scrollToId } from "../../../utils";

const FORM_ID = "devis-construction";

const ConstruireMaMaison = () => {
  const goToForm = () => scrollToId(FORM_ID);

  return (
    <LightLayout
      title="Construire ma maison | Sédar Group"
      description="Décrivez votre projet de construction en détail et recevez l'accompagnement d'un architecte Sédar : plans, permis de construire, appel d'offres et suivi de chantier."
    >
      <ServiceHero
        image={data.hero.image}
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        breadcrumb={[
          { id: 1, name: "Accueil", url: "/" },
          { id: 2, name: "Construire ma maison", url: "/services/construire-ma-maison" },
        ]}
        primaryCta={{ label: "Décrire mon projet", onClick: goToForm }}
        secondaryCta={{ label: "Voir nos réalisations", href: "/work" }}
      />

      <section className="sg-section">
        <div className="container">
          <SectionHead
            eyebrow="Pourquoi Sédar"
            title="Un seul interlocuteur, de l'esquisse aux clés"
            text="Nous réunissons l'architecte, les entreprises et le suivi de chantier au sein d'un même accompagnement, avec des prix et des délais engagés par contrat."
          />
          <ValueProps items={data.valueProps} />
        </div>
      </section>

      <section className="sg-section sg-section--ivory">
        <div className="container">
          <div className="sg-split">
            <div className="sg-split__body">
              <h2>Votre maison commence par une conversation</h2>
              <p>
                Chaque projet est différent : un terrain en pente, une famille qui s&apos;agrandit,
                une enveloppe budgétaire à respecter au franc près. C&apos;est pourquoi nous ne
                partons jamais d&apos;un catalogue de modèles, mais de votre situation.
              </p>
              <p>
                Vous décrivez votre projet ci-dessous, aussi précisément que vous le souhaitez. Un
                architecte étudie votre demande, vérifie la faisabilité réglementaire et vous
                rappelle sous 24h ouvrées pour un premier échange gratuit et sans engagement.
              </p>
              <p>
                S&apos;il est trop tôt pour vous engager, ce n&apos;est pas un problème : beaucoup de
                nos clients nous contactent avant même d&apos;avoir acheté leur terrain, justement
                pour éviter les mauvaises surprises.
              </p>
              <button type="button" className="sg-btn" onClick={goToForm}>
                Décrire mon projet
              </button>
            </div>
            <div className="sg-split__media">
              <img src="/assets/img/conception/21.jpg" alt="Projet de construction Sédar" />
            </div>
          </div>
        </div>
      </section>

      <section className="sg-section sg-section--ink">
        <div className="container">
          <SectionHead
            eyebrow="Notre méthode"
            title="Les six étapes de votre construction"
            text="Un processus éprouvé, jalonné de points de validation pour que vous gardiez la main à chaque instant."
          />
          <StepsTimeline items={data.steps} />
        </div>
      </section>

      <section className="sg-section">
        <div className="container">
          <SectionHead
            eyebrow="Nos tarifs"
            title="Combien coûte la conception ?"
            text="Les honoraires de conception dépendent du type de bâtiment et de la complexité du site."
          />
          <PriceTiers
            items={data.pricing}
            note="Tarifs indicatifs de conception, hors coût de construction. Les honoraires d'architecte en mission complète représentent habituellement 3 % à 10 % du montant des travaux. Un devis ferme vous est remis après l'étude de votre projet."
          />
        </div>
      </section>

      <section className="sg-section sg-section--ivory">
        <div className="container">
          <SectionHead
            eyebrow="Votre projet"
            title="Décrivez-nous votre maison"
            text="Prenez le temps de détailler : chaque précision nous fait gagner un aller-retour et affine l'estimation."
          />
          <ProjectBriefForm
            variant="construction"
            id={FORM_ID}
            pageTitle="Construire ma maison"
          />
        </div>
      </section>

      <section className="sg-section">
        <div className="container">
          <SectionHead eyebrow="Questions fréquentes" title="Vous vous demandez peut-être…" />
          <FaqAccordion items={data.faq} />
        </div>
      </section>

      <StickyCta
        label="Construire ma maison"
        hint="Étude gratuite, réponse sous 24h"
        onClick={goToForm}
      />
    </LightLayout>
  );
};

export default ConstruireMaMaison;
