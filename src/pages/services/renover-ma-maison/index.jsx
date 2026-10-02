/* eslint-disable @next/next/no-img-element */
import React from "react";
import LightLayout from "../../../layouts/light";
import ServiceHero from "../../../components/ServiceHero";
import SectionHead from "../../../components/SectionHead";
import ValueProps from "../../../components/ValueProps";
import OptionGrid from "../../../components/OptionGrid";
import PriceTiers from "../../../components/PriceTiers";
import FaqAccordion from "../../../components/FaqAccordion";
import ProjectBriefForm from "../../../components/ProjectBriefForm";
import StickyCta from "../../../components/StickyCta";
import GuideProcess from "../../../components/GuideProcess";
import data from "../../../data/services/renovation.json";
import options from "../../../data/services/renovation-options.json";
import { scrollToId } from "../../../utils";

const FORM_ID = "devis-renovation";
const GRID_ID = "prestations";

const RenoverMaMaison = () => {
  const [selectedIds, setSelectedIds] = React.useState([]);

  const goToForm = () => scrollToId(FORM_ID);
  const goToGrid = () => scrollToId(GRID_ID);

  const titleById = React.useMemo(
    () => Object.fromEntries(options.map((option) => [option.id, option.title])),
    []
  );
  const idByTitle = React.useMemo(
    () => Object.fromEntries(options.map((option) => [option.title, option.id])),
    []
  );

  // The grid works in ids, the form's chips in human-readable titles.
  const selectedTitles = selectedIds.map((id) => titleById[id]);

  const toggleOption = (id) =>
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );

  const onSelectionChange = (titles) =>
    setSelectedIds(titles.map((title) => idByTitle[title]).filter(Boolean));

  const count = selectedIds.length;

  return (
    <LightLayout
      title="Rénover ma maison | Sédar Group"
      description="Peinture, carrelage, plomberie, électricité, cuisine, salle de bain… Choisissez vos travaux de rénovation et recevez une estimation détaillée sous 24h."
    >
      <ServiceHero
        image={data.hero.image}
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        breadcrumb={[
          { id: 1, name: "Accueil", url: "/" },
          { id: 2, name: "Rénover ma maison", url: "/services/renover-ma-maison" },
        ]}
        primaryCta={{ label: "Choisir mes travaux", onClick: goToGrid }}
        secondaryCta={{ label: "Voir nos réalisations", href: "/work" }}
      />

      <section className="sg-section">
        <div className="container">
          <SectionHead
            eyebrow="Pourquoi Sédar"
            title="Une rénovation sans mauvaise surprise"
            text="Des artisans vérifiés, des prix négociés et un expert habitat qui suit votre chantier du premier devis à la réception."
          />
          <ValueProps items={data.valueProps} />
        </div>
      </section>

      <section className="sg-section sg-section--ivory" id={GRID_ID}>
        <div className="container">
          <SectionHead
            eyebrow="Nos prestations"
            title="Les travaux de rénovation que nous réalisons"
            text="Sélectionnez une ou plusieurs prestations : elles seront regroupées dans un devis unique, ce qui permet de mutualiser les interventions et de réduire le coût global."
          />

          <OptionGrid options={options} selected={selectedIds} onToggle={toggleOption} />

          <div className="sg-options__footer">
            <span className="sg-options__count">
              {count === 0 ? (
                "Aucune prestation sélectionnée pour le moment"
              ) : (
                <>
                  <strong>
                    {count} prestation{count > 1 ? "s" : ""}
                  </strong>{" "}
                  sélectionnée{count > 1 ? "s" : ""}
                </>
              )}
            </span>
            <button type="button" className="sg-btn" onClick={goToForm}>
              Estimer ces travaux
            </button>
          </div>
        </div>
      </section>

      <section className="sg-section">
        <div className="container">
          <SectionHead
            eyebrow="Repères de prix"
            title="Trois niveaux de rénovation"
            text="Le coût au m² dépend avant tout de l'ampleur des travaux. Voici les fourchettes que nous observons sur le marché."
          />
          <PriceTiers
            items={data.categories}
            note="Fourchettes indicatives, données à titre d'information pour vous aider à cadrer votre budget. Le prix ferme est établi après visite et étude de votre logement, puis engagé par contrat."
          />
        </div>
      </section>

      <section className="sg-section sg-section--ivory">
        <div className="container">
          <SectionHead
            eyebrow="Votre projet"
            title="Décrivez vos travaux"
            text="Plus votre description est précise, plus l'estimation sera juste. Un expert habitat vous rappelle sous 24h ouvrées."
          />
          <ProjectBriefForm
            variant="renovation"
            id={FORM_ID}
            pageTitle="Rénover ma maison"
            fieldOptions={{ works: options.map((option) => option.title) }}
            selection={selectedTitles}
            onSelectionChange={onSelectionChange}
          />
        </div>
      </section>

      <GuideProcess />

      <section className="sg-section">
        <div className="container">
          <SectionHead eyebrow="Questions fréquentes" title="Vous vous demandez peut-être…" />
          <FaqAccordion items={data.faq} />
        </div>
      </section>

      <StickyCta
        label={count > 0 ? `${count} prestation${count > 1 ? "s" : ""} sélectionnée${count > 1 ? "s" : ""}` : "Rénover ma maison"}
        hint="Estimation gratuite, réponse sous 24h"
        onClick={goToForm}
      />
    </LightLayout>
  );
};

export default RenoverMaMaison;
