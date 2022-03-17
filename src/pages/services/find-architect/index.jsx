import React from "react";
import PageHeader from "../../../components/Page-header";
import LightLayout from "../../../layouts/light";
import Card from "../../../components/Card";
import GuideProcess from "../../../components/GuideProcess"
const Renovate = () => {
    React.useEffect(() => {
        document.querySelector("body").classList.add("index3");
    }, []);
    return (
        <LightLayout footerClass={"mt-30"}>
            <PageHeader
                title="Pack conception zen - plans & avant projet"
                fullPath={[
                    { id: 1, name: "Accueil", url: "/" },
                    { id: 2, name: "Services", url: "/" },
                    { id: 2, name: "Trouver un architecte", url: "/services/find-architect" },
                ]}
            />
            <GuideProcess></GuideProcess>
            <Card linkTo={'quote'} title={"Travailler avec un architecte n'a jamais été aussi simple & serein"} showButton buttonTitle="Confier votre projet">
                Chez Sedar, nous sommes convaincus que votre projet sera un succès uniquement si vous avez anticipé les prix, les délais et les étapes de votre rénovation. En présentant votre projet sur Sedar, nos experts habitats vous donnent gratuitement le coup d’avance sur vos travaux. Nous vous accompagnons des premiers plans au dernier coup de peinture avec nos architectes et entreprises triés sur le volet.
                <p><b>Pourquoi faire confiance à Sedar pour votre projet ?</b></p>
                <ol>
                    <li> <b>- </b>+ 950 projets de rénovation réalisés et 98% de satisfaction</li>
                    <li> <b>- </b> Accompagnement sur-mesure par un architecte  </li>
                    <li> <b>- </b>Les meilleurs architectes et entreprises pour votre rénovation </li>
                    <li> <b>- </b>Travaux avec prix & délais garantis par contrat </li>
                    <li> <b>- </b>Garantie de bonne fin de chantier AXA </li>
                </ol> Ici, nous partageons notre savoir sous la forme d’un dossier complet sur la réhabilitation afin que vous ayez accès à une information fiable.
            </Card>
            <Card title={"Qu'est-ce qu'un architecte ?"} imgLeft animation={"fadeInLeft"} showButton linkTo={'quote'} buttonTitle={"Demander une estimation personnalisée"}>
                Un architecte est un <b>professionnel diplômé d’état (DE)</b> qui a effectué 5 ans d’études et le plus souvent une 6ème année supplémentaire lui permettant d’obtenir l’Habilitation à exercer la Maîtrise d’oeuvre en son nom propre (HMONP).
                Ses compétences sont reconnues par la loi et il est habilité à accompagner un client (le maître d’ouvrage) dans son projet de rénovation de maison ou rénovation d’appartement, d’extension de maison ou de construction neuve d’un bâtiment ou d’une habitation.
                <p><b>En pratique, l’architecte intervient sur toutes les phases du projet architectural d’un client:</b>
                    <ol><li>-le choix de l’emplacement du terrain</li>
                        <li> – l’étude de faisabilité du projet</li>
                        <li>– la conception (croquis, modélisations et plans)</li>
                        <li>– l’appel d’offre pour la sélection d’entreprises (dce)</li>
                        <li> – la réalisation des démarches administratives et techniques</li>
                        <li> – l’obtention du permis de construire</li>
                        <li> – le suivi du chantier</li>
                    </ol> </p>
            </Card>
            </LightLayout>
    );
};
export default Renovate;
