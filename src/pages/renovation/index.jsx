import React from "react";
import PageHeader from "../../components/Page-header";
import LightLayout from "../../layouts/light";
import Card from "../../components/Card";
import GuideProcess from "../../components/GuideProcess"
const Renovate = () => {
    React.useEffect(() => {
        document.querySelector("body").classList.add("index3");
    }, []);
    return (
        <LightLayout footerClass={"mt-30"}>
            <PageHeader imgSrc={"/assets/img/pg3.jpg"}
                title="Estimez le coût de la rénovation"
                fullPath={[
                    { id: 1, name: "Accueil", url: "/" },
                    { id: 2, name: "Rénovation", url: "/renovation" },
                ]}
            />
            <GuideProcess></GuideProcess>
            <Card linkTo={'quote'} imgSrc={"/assets/img/renovation/11.jpg"} title={"Notre mission, transformer votre rénovation de maison en succès"} showButton buttonTitle="Confier un devis">
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
            <Card imgSrc={"/assets/img/renovation/12.jpg"} title={"Quel prix pour la rénovation d’une maison ?"} imgLeft animation={"fadeInLeft"} showButton linkTo={'quote'} buttonTitle={"Demander une estimation personnalisée"}>
                <p>Selon le type de bien et l’ampleur des travaux, plusieurs paramètres sont à considérer avant de se projeter dans les travaux de rénovation et en déduire le budget à consacrer.
                    <p>Les travaux de rénovation sont généralement classés en trois catégories principales :</p>
                    <ol><li>-  les <b>rafraîchissements</b> : peinture, revêtements de sols et muraux (parquet, moquette, carrelage, faïence)…</li>
                        <li>- la <b>rénovation simple</b>: rénovation de la cuisine et des salles de bains, menuiseries, modifications en électricité et en plomberie… </li>
                        <li>- la <b>rénovation lourde ou grosse rénovation </b>: toiture, murs porteurs, cloisons, planchers, isolation, évacuations, remise à neuf totale de l’électricité et de la plomberie…</li>
                    </ol></p><p> Le coût des travaux varie selon la catégorie dans laquelle vous vous situez. En règle générale, vous pouvez vous baser sur les montants moyens suivants afin de prévoir votre budget.</p>
            </Card>
            <Card imgSrc={"/assets/img/renovation/13.jpg"} title={"Rénovation de maison: quel prix pour un simple rafraîchissement ?"} animation={"fadeInRight"} >
                Les <b>travaux de rafraîchissement </b>concernent essentiellement le second oeuvre, des petits travaux que vous pouvez faire vous même sans la présence d’un architecte. Pour rafraîchir votre maison, vous serez amené à <b>repeindre les murs, changer la moquette ou le carrelage</b>… Rafraîchir sa maison peut poursuivre un objectif de décoration ou d’amélioration des performances énergétiques, afin d’améliorer le confort de la maison.
                <p>Comptez entre <b>200 et 800 € TTC </b>le m² pour des travaux de rafraîchissement  tels :</p>
                <ol><li> - La peinture</li>
                    <li> - Le changement de papier peint</li>
                    <li> - Le carrelage</li>
                    <li> - La réfection de sol, de mur et plafond</li>
                    <li> - La décoration</li>
                </ol>
                Les prix varieront évidemment en fonction de la surface et des matériaux que vous aurez choisis.
            </Card>
            <Card imgSrc={"/assets/img/renovation/14.jpg"} title={"Rénovation de maison: quel prix pour une rénovation simple ?"} >
                Une <b> rénovation simple </b>est le type de rénovation que l’on peut faire soi-même sans forcément faire appel à un architecte. Cependant faire appel à un professionnel serait un plus quand il s’agit de rénover la cuisine, la salle de bains, revoir les menuiseries, rafraîchir les cloisons, modifier l’électricité et la plomberie…
                <p>Comptez entre <b>800 et 1200 € TTC </b> le m² pour des travaux de rénovation simple qui consistent à :</p>
                <ol><li> - Rénover la cuisine et salle de bain</li>
                    <li> - Rénover  l’électricité</li>
                    <li> - Rénover la plomberie</li>
                    <li> - Remplacer les fenêtres</li>
                    <li> - Ajouter ou modifier des cloisons</li>
                </ol>
                Ces prix représentent une moyenne pratiquée sur le marché. Chaque chantier étant spécifique, nous vous invitons à faire estimer votre projet et réaliser des devis pour un projet plus personnalisé.                </Card>
            <Card imgSrc={"/assets/img/renovation/15.jpg"} title={"Rénovation de maison: quel prix pour une rénovation complète ?"} imgLeft>
                <p>La grosse rénovation concerne les travaux plus complexes pour lesquels on fait appel à des professionnels, tels l’abattement des murs, la création de cloisons, la plomberie, la maçonnerie…Tous travaux qui nécessitent des transformations significatives de l’habitat.
                </p><p>Comptez en moyenne entre <b>900 euros et 2000 euros </b>le mètre carré pour un travail de qualité  pour réaliser une rénovation conséquente.
                </p>
                <p> Comptez entre <b>1000 et 2000 € TTC </b>le m² pour des travaux de grosse rénovation qui consistent à :
                </p>
                <ol><li> - Modifier ou détruire les murs porteurs</li>
                    <li> - Modifier de la structure du plancher</li>
                    <li> - Changer les fenêtres</li>
                    <li> - Refaire complément l’électricité, la plomberie, et l’isolation</li>
                </ol>
                <p>Pour aller plus loin : Voir un exemple de prix et tarifs au m2 d’une rénovation de maison ancienne
                    Si vous souhaitez rénover une ancienne bâtisse, vous devrez probablement remettre l’électricité et/ou l’isolation aux normes, sachant qu’elles évoluent sans cesse.
                    Lisez notre dossier Prix d’une rénovation complète pour découvrir le « Guide des prix poste par poste d’une rénovation complète de maison ».
                </p> </Card>
        </LightLayout>
    );
};
export default Renovate;
