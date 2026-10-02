/* eslint-disable @next/next/no-img-element */
import React from "react";
import LightLayout from "../../../layouts/light";
import ServiceHero from "../../../components/ServiceHero";
import SectionHead from "../../../components/SectionHead";
import ValueProps from "../../../components/ValueProps";
import StepsTimeline from "../../../components/StepsTimeline";
import FaqAccordion from "../../../components/FaqAccordion";
import ProjectBriefForm from "../../../components/ProjectBriefForm";
import StickyCta from "../../../components/StickyCta";
import Team1 from "../../../components/Team1";
import data from "../../../data/services/architecte.json";
import { scrollToId } from "../../../utils";

const FORM_ID = "demande-architecte";

const TrouverUnArchitecte = () => {
  const goToForm = () => scrollToId(FORM_ID);

  return (
    <LightLayout
      title="Trouver un architecte | Sédar Group"
      description="Nous vous mettons en relation gratuitement avec un architecte diplômé d'État de notre réseau, choisi pour votre projet, votre budget et votre région."
    >
      <ServiceHero
        image={data.hero.image}
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        breadcrumb={[
          { id: 1, name: "Accueil", url: "/" },
          { id: 2, name: "Trouver un architecte", url: "/services/trouver-un-architecte" },
        ]}
        primaryCta={{ label: "Être mis en relation", onClick: goToForm }}
        secondaryCta={{ label: "Voir nos réalisations", href: "/work" }}
      />

      <section className="sg-section">
        <div className="container">
          <SectionHead
            eyebrow="Notre réseau"
            title="Le bon architecte pour votre projet"
            text="Plutôt qu'un annuaire, une sélection : nous choisissons dans notre réseau le professionnel dont l'expérience correspond réellement à ce que vous voulez construire."
          />
          <ValueProps items={data.valueProps} />
        </div>
      </section>

      <section className="sg-section sg-section--ivory">
        <div className="container">
          <div className="sg-split sg-split--reverse">
            <div className="sg-split__media">
              <img
                src="/assets/img/services/find-architect/32.jpg"
                alt="Architecte au travail sur des plans"
              />
            </div>
            <div className="sg-split__body">
              <h2>Qu&apos;est-ce qu&apos;un architecte ?</h2>
              <p>
                Un architecte est un professionnel diplômé d&apos;État qui a effectué cinq années
                d&apos;études, le plus souvent complétées par une sixième année donnant
                l&apos;habilitation à exercer la maîtrise d&apos;œuvre en son nom propre.
              </p>
              <p>
                Ses compétences sont reconnues par la loi : il est habilité à vous accompagner, en
                tant que maître d&apos;ouvrage, sur un projet de construction neuve, de rénovation
                ou d&apos;extension. En pratique, il intervient sur toutes les phases du projet.
              </p>
              <ul className="sg-checklist">
                {data.missions.map((mission) => (
                  <li key={mission.id}>{mission.text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sg-section sg-section--ink">
        <div className="container">
          <SectionHead
            eyebrow="Comment ça marche"
            title="Trois étapes, aucun frais"
            text="La mise en relation et le premier rendez-vous sont gratuits et sans engagement."
          />
          <StepsTimeline items={data.steps} />
        </div>
      </section>

      <Team1 />

      <section className="sg-section sg-section--ivory">
        <div className="container">
          <SectionHead
            eyebrow="Votre demande"
            title="Parlez-nous de votre projet"
            text="Quelques minutes suffisent. Nous revenons vers vous sous 24h ouvrées avec le profil d'architecte le plus adapté."
          />
          <ProjectBriefForm
            variant="architecte"
            id={FORM_ID}
            pageTitle="Trouver un architecte"
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
        label="Trouver un architecte"
        hint="Mise en relation gratuite"
        onClick={goToForm}
      />
    </LightLayout>
  );
};

export default TrouverUnArchitecte;
