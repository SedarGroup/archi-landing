import React from "react";
import ValueProps from "../ValueProps";

const items = [
  {
    id: 1,
    icon: "pe-7s-user",
    title: "Un interlocuteur unique",
    text: "Un chef de projet dédié suit votre dossier du premier rendez-vous jusqu'à la réception des travaux.",
  },
  {
    id: 2,
    icon: "pe-7s-note2",
    title: "Un devis clair et détaillé",
    text: "Chaque poste est chiffré ligne par ligne. Pas de supplément décidé sans votre accord écrit.",
  },
  {
    id: 3,
    icon: "pe-7s-tools",
    title: "Des artisans sélectionnés",
    text: "Nous travaillons avec des équipes éprouvées sur nos chantiers, assurées et contrôlées à chaque étape.",
  },
  {
    id: 4,
    icon: "pe-7s-clock",
    title: "Des délais engagés",
    text: "Un planning contractuel vous est remis au démarrage, avec un point d'avancement chaque semaine.",
  },
];

const HomeValues = () => (
  <section className="sg-section sg-section--ivory sg-section--tight">
    <div className="container">
      <ValueProps items={items} />
    </div>
  </section>
);

export default HomeValues;
