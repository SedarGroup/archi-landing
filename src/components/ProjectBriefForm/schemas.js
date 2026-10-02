export const REGIONS = [
  "Dakar",
  "Diourbel",
  "Fatick",
  "Kaffrine",
  "Kaolack",
  "Kédougou",
  "Kolda",
  "Louga",
  "Matam",
  "Saint-Louis",
  "Sédhiou",
  "Tambacounda",
  "Thiès",
  "Ziguinchor",
  "Hors Sénégal",
];

const BUDGETS = [
  "Moins de 10 millions FCFA",
  "10 à 25 millions FCFA",
  "25 à 50 millions FCFA",
  "50 à 100 millions FCFA",
  "Plus de 100 millions FCFA",
  "Je ne sais pas encore",
];

const DELAIS = [
  "Dès que possible",
  "Dans les 3 mois",
  "Dans les 6 mois",
  "Dans l'année",
  "Pas de date arrêtée",
];

const CONTACT_STEP = {
  id: "contact",
  label: "Contact",
  title: "Vos coordonnées",
  intro:
    "Un expert Sédar vous rappelle sous 24h ouvrées. Vos informations ne sont utilisées que pour traiter votre demande.",
  fields: [
    {
      name: "name",
      label: "Nom et prénom",
      type: "text",
      required: true,
      placeholder: "Awa Diop",
    },
    {
      name: "phone",
      label: "Téléphone / WhatsApp",
      type: "tel",
      required: true,
      placeholder: "+221 77 000 00 00",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "vous@exemple.com",
    },
    {
      name: "preferredContact",
      label: "Moyen de contact préféré",
      type: "select",
      options: ["Téléphone", "WhatsApp", "Email"],
      defaultValue: "Téléphone",
    },
    {
      name: "availability",
      label: "Meilleur moment pour vous joindre",
      type: "select",
      options: [
        "Matin (8h - 12h)",
        "Après-midi (12h - 17h)",
        "Soirée (17h - 20h)",
        "Peu importe",
      ],
      defaultValue: "Peu importe",
    },
  ],
};

const describeStep = (placeholder, hint) => ({
  id: "description",
  label: "Description",
  title: "Décrivez votre projet en détail",
  intro:
    "C'est la partie la plus utile pour nos équipes : plus votre description est précise, plus l'estimation sera juste.",
  fields: [
    {
      name: "description",
      label: "Votre projet",
      type: "textarea",
      required: true,
      full: true,
      minLength: 40,
      placeholder,
      hint,
    },
  ],
});

export const SCHEMAS = {
  construction: {
    subject: "Nouveau projet de construction",
    successText:
      "Votre projet de construction nous est bien parvenu. Un architecte Sédar l'étudie et vous rappelle sous 24h ouvrées pour un premier échange gratuit.",
    steps: [
      {
        id: "projet",
        label: "Projet",
        title: "Votre projet de construction",
        intro: "Quelques repères pour cadrer la faisabilité et le budget.",
        fields: [
          {
            name: "propertyType",
            label: "Type de bien",
            type: "select",
            required: true,
            options: [
              "Villa individuelle",
              "Maison simple",
              "Duplex",
              "Immeuble / habitat collectif",
              "Local commercial",
              "Autre",
            ],
          },
          {
            name: "hasLand",
            label: "Possédez-vous déjà le terrain ?",
            type: "select",
            required: true,
            options: [
              "Oui, terrain acquis",
              "Non, recherche en cours",
              "En cours d'acquisition",
            ],
          },
          { name: "region", label: "Région", type: "select", required: true, options: REGIONS },
          {
            name: "city",
            label: "Commune / quartier",
            type: "text",
            placeholder: "Ex. Mermoz, Saly, Diamniadio",
          },
          {
            name: "landSurface",
            label: "Surface du terrain (m²)",
            type: "number",
            min: 0,
            placeholder: "300",
          },
          {
            name: "livingSurface",
            label: "Surface habitable souhaitée (m²)",
            type: "number",
            min: 0,
            placeholder: "180",
          },
          { name: "levels", label: "Nombre de niveaux", type: "number", min: 0, placeholder: "2" },
          { name: "bedrooms", label: "Chambres", type: "number", min: 0, placeholder: "4" },
          { name: "bathrooms", label: "Salles de bain", type: "number", min: 0, placeholder: "2" },
          {
            name: "finish",
            label: "Niveau de finition",
            type: "select",
            options: ["Standard", "Confort", "Haut de gamme"],
            defaultValue: "Confort",
          },
          {
            name: "extras",
            label: "Pièces et équipements souhaités",
            type: "chips",
            full: true,
            options: [
              "Garage",
              "Piscine",
              "Terrasse",
              "Bureau",
              "Chambre d'amis",
              "Buanderie",
              "Jardin paysager",
              "Panneaux solaires",
              "Ascenseur",
              "Studio indépendant",
            ],
          },
        ],
      },
      {
        id: "cadre",
        label: "Cadre",
        title: "Budget, délais et avancement",
        intro:
          "Ces éléments nous permettent d'orienter votre projet vers la bonne équipe et la bonne formule.",
        fields: [
          { name: "budget", label: "Budget envisagé", type: "select", required: true, options: BUDGETS },
          { name: "timeline", label: "Démarrage souhaité", type: "select", required: true, options: DELAIS },
          {
            name: "progress",
            label: "Où en êtes-vous ?",
            type: "select",
            required: true,
            options: [
              "Au stade de l'idée",
              "Terrain acquis",
              "Plans déjà réalisés",
              "Permis de construire obtenu",
              "Chantier déjà commencé",
            ],
          },
          {
            name: "service",
            label: "Prestation souhaitée",
            type: "select",
            required: true,
            options: [
              "Plans et avant-projet seulement",
              "Plans + permis de construire",
              "Plans + suivi de chantier",
              "Clé en main",
              "Je ne sais pas encore",
            ],
          },
        ],
      },
      describeStep(
        "Décrivez votre projet : l'orientation du terrain, l'organisation des pièces souhaitée, le style architectural qui vous plaît, vos contraintes, ce que vous voulez absolument éviter...",
        "Pensez à mentionner le style recherché, la composition du foyer, vos contraintes de budget ou de calendrier, et toute particularité du terrain."
      ),
      CONTACT_STEP,
    ],
  },

  renovation: {
    subject: "Nouvelle demande de rénovation",
    successText:
      "Votre demande de rénovation est bien enregistrée. Un expert habitat vous rappelle sous 24h ouvrées pour préciser votre besoin et organiser la visite si nécessaire.",
    steps: [
      {
        id: "travaux",
        label: "Travaux",
        title: "Les travaux à réaliser",
        intro:
          "Sélectionnez tout ce qui vous intéresse : regrouper les prestations dans un même devis réduit le coût global.",
        fields: [
          {
            name: "works",
            label: "Prestations souhaitées",
            type: "chips",
            full: true,
            required: true,
            controlled: true,
            options: [],
          },
          {
            name: "propertyType",
            label: "Type de logement",
            type: "select",
            required: true,
            options: [
              "Appartement",
              "Villa",
              "Maison simple",
              "Immeuble",
              "Local commercial",
              "Autre",
            ],
          },
          {
            name: "surface",
            label: "Surface concernée (m²)",
            type: "number",
            required: true,
            min: 0,
            placeholder: "120",
          },
          { name: "region", label: "Région", type: "select", required: true, options: REGIONS },
          {
            name: "city",
            label: "Commune / quartier",
            type: "text",
            placeholder: "Ex. Ouakam, Mbour",
          },
        ],
      },
      {
        id: "cadre",
        label: "Cadre",
        title: "Budget, délais et conditions",
        intro: "Pour organiser le chantier dans les meilleures conditions.",
        fields: [
          { name: "budget", label: "Budget envisagé", type: "select", required: true, options: BUDGETS },
          { name: "timeline", label: "Démarrage souhaité", type: "select", required: true, options: DELAIS },
          {
            name: "occupied",
            label: "Le logement sera-t-il occupé pendant les travaux ?",
            type: "select",
            options: ["Oui", "Non", "Partiellement"],
            defaultValue: "Non",
          },
          {
            name: "scope",
            label: "Ampleur des travaux",
            type: "select",
            options: [
              "Rafraîchissement",
              "Rénovation simple",
              "Rénovation lourde",
              "Je ne sais pas",
            ],
            defaultValue: "Je ne sais pas",
          },
        ],
      },
      describeStep(
        "Décrivez les travaux : l'état actuel du logement, les pièces concernées, ce que vous souhaitez obtenir, les matériaux qui vous plaisent, les désordres constatés (fissures, infiltrations)...",
        "Mentionnez l'âge du bâtiment, les pièces concernées et tout désordre déjà constaté : cela évite les mauvaises surprises au moment du chiffrage."
      ),
      CONTACT_STEP,
    ],
  },

  architecte: {
    subject: "Nouvelle demande de mise en relation architecte",
    successText:
      "Votre demande est bien reçue. Nous identifions l'architecte de notre réseau le plus adapté à votre projet et vous recontactons sous 24h ouvrées.",
    steps: [
      {
        id: "projet",
        label: "Projet",
        title: "Votre projet",
        intro:
          "Ces informations nous servent à sélectionner l'architecte dont l'expérience correspond à votre besoin.",
        fields: [
          {
            name: "projectNature",
            label: "Nature du projet",
            type: "select",
            required: true,
            options: [
              "Construction neuve",
              "Rénovation",
              "Extension / surélévation",
              "Aménagement intérieur",
              "Permis de construire uniquement",
              "Autre",
            ],
          },
          { name: "region", label: "Région", type: "select", required: true, options: REGIONS },
          {
            name: "city",
            label: "Commune / quartier",
            type: "text",
            placeholder: "Ex. Almadies, Thiès",
          },
          {
            name: "surface",
            label: "Surface concernée (m²)",
            type: "number",
            min: 0,
            placeholder: "150",
          },
          {
            name: "mission",
            label: "Mission souhaitée",
            type: "select",
            required: true,
            options: [
              "Conception et plans",
              "Conception + permis de construire",
              "Mission complète avec suivi de chantier",
              "Conseil ponctuel",
              "Je ne sais pas encore",
            ],
          },
        ],
      },
      {
        id: "cadre",
        label: "Cadre",
        title: "Budget et calendrier",
        intro: "Pour vous orienter vers un architecte dont les honoraires correspondent à votre enveloppe.",
        fields: [
          { name: "budget", label: "Budget travaux envisagé", type: "select", required: true, options: BUDGETS },
          { name: "timeline", label: "Démarrage souhaité", type: "select", required: true, options: DELAIS },
          {
            name: "meeting",
            label: "Format du premier rendez-vous",
            type: "select",
            options: ["En agence", "Sur le terrain", "Visioconférence", "Peu importe"],
            defaultValue: "Peu importe",
          },
        ],
      },
      describeStep(
        "Décrivez votre projet et ce que vous attendez de l'architecte : le contexte, vos références esthétiques, votre niveau d'avancement, les points sur lesquels vous avez besoin d'être guidé...",
        "Dites-nous aussi si vous avez déjà des plans, un terrain ou des devis en main."
      ),
      CONTACT_STEP,
    ],
  },
};
