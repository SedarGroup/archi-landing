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
            <PageHeader
                title="Estimez le coût de la conception"
                fullPath={[
                    { id: 1, name: "Accueil", url: "/" },
                    { id: 2, name: "Conception", url: "/conception" },
                ]}
            />
            <GuideProcess></GuideProcess>
            <Card linkTo={'quote'} title={"Notre mission, transformer votre rénovation d'appartement en succès"} showButton buttonTitle="Confier un devis">
                Chez Sedar, nous sommes convaincus que votre projet sera un succès uniquement si vous avez anticipé les prix, les délais et les étapes de votre rénovation. En présentant votre projet sur Archionline, nos experts habitats vous donnent gratuitement le coup d’avance sur vos travaux. Nous vous accompagnons des premiers plans au dernier coup de peinture avec nos architectes et entreprises triés sur le volet.
                <p><b>Pourquoi faire confiance à Sedar pour votre projet ?</b></p>
                <ol>
                    <li> <b>- </b>+ 950 projets de rénovation réalisés et 98% de satisfaction</li>
                    <li> <b>- </b> Accompagnement sur-mesure par un architecte  </li>
                    <li> <b>- </b>Les meilleurs architectes et entreprises pour votre rénovation </li>
                    <li> <b>- </b>Travaux avec prix & délais garantis par contrat </li>
                    <li> <b>- </b>Garantie de bonne fin de chantier AXA </li>
                </ol> Ici, nous partageons notre savoir sous la forme d’un dossier complet sur la réhabilitation afin que vous ayez accès à une information fiable.
            </Card>
            <Card title={"Rénovation d’appartement: quels sont les prix au m² ?"} imgLeft animation={"fadeInLeft"} showButton linkTo={'quote'} buttonTitle={"Demander une estimation personnalisée"}>
                <p>Fixer un budget pour <b>sa rénovation d’appartement</b> n’est pas chose facile puisque de nombreux paramètres entrent en jeu. Parmi les travaux que vous souhaitez réaliser dans votre appartement, le prix de la rénovation ne sera pas le même et variera selon les matériaux et la complexité des travaux.</p>
                <p>Le prix de la rénovation d’un appartement doit prendre en compte la nature de chaque tâche à prévoir, du gros œuvre aux finitions. Les travaux peuvent concerner :</p>
                <ol>
                    <li>- un simple rafraîchissement</li>
                    <li> - une rénovation simple</li>
                    <li>- une grosse rénovation ou rénovation lourde</li>
                </ol>Le prix d’une rénovation d’appartement varie largement selon les caractéristiques de votre appartement, le type de travaux et la localisation du chantier. Enfin, le choix du professionnel, le niveau de gamme des matériaux et équipements sont également des variables pouvant influer sur le coût des travaux de rénovation d’appartement.
            </Card>
            <Card title={"3-Vous recevez votre devis"} animation={"fadeInRight"} >
                Votre expert habitat sélectionne pour vous le professionnel proche de chez vous le plus adapté à votre projet. Il négocie ensuite pour vous le devis afin de vous faire profiter d’un prix ultra compétitif grâce à notre pouvoir de négociation.            </Card>
            <Card title={"4-Vous acceptez et signez le devis"} animation={"fadeInDown"} >
                Après avoir réglé l’acompte en ligne, la mission est lancée. Nous faisons déplacer chez vous dans la semaine les architectes et entreprises pour prendre en considération tous vos besoins et vos contraintes. Ensuite ils travaillent à la réalisation de votre projet jusqu’à sa livraison en toute conformité.            </Card>
            <Card title={"5-Votre projet se réalise"} >
                L’architecte et l’entreprise sélectionnée réalisent votre projet avec prix et délais garantis. Vous pouvez suivre l’avancement du projet et échanger avec votre expert habitat tout au long de la mission. Votre projet bénéficie de la garantie décennale et de la protection juridique AXA. </Card>
        </LightLayout>
    );
};
export default Renovate;
