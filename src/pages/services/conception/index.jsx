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
            <PageHeader imgSrc={"/assets/img/pg1.jpg"}
                title="Pack conception zen - plans & avant projet"
                fullPath={[
                    { id: 1, name: "Accueil", url: "/" },
                    { id: 2, name: "Services", url: "/" },
                    { id: 2, name: "Conception", url: "/services/conception" },
                ]}
            />
            <Card linkTo={'quote'} noImg title={"Pourquoi choisir le pack conception zen?"} showButton buttonTitle="Obtenir un devis gratuitement">
                Si le client est satisfait des premières études d’esquisse, il peut décider de poursuivre les travaux dans les études d’avant-projet.
                <p>Dans ce pack, on distingue  2 étapes :</p><p><b>Avant-projet sommaire– APS :</b></p> <p>Après accord du client, l’architecte va alors fournir une description précise des différentes options retenues pour le projet. Il établira également une estimation du coût et de la durée des travaux. Ce document de travail sert à finaliser l’offre de service.</p><p><b>Avant-projet définitif – APD :</b></p><p>Les dernières mises au point effectuées en fonction des options retenues par le client, les différentes prestations techniques, le choix des matériaux et l’ensemble des travaux sont précisés avec leur intégration au sein du projet et de la construction.</p><p>Un chiffrage précis de l’ensemble du projet est alors finalisé.  Les documents qui détaillent les caractéristiques définitives du projet et des performances convenues sont rédigés de manière formelle ; ils forment le contrat qui précise point par point l’ensemble des services fournis par l’architecte au client durant les phases suivantes.</p> </Card>
            <Card title={"Que comprend le pack conception zen ? A quel prix ?"} imgLeft animation={"fadeInLeft"} showButton linkTo={'quote'} buttonTitle={"Obtenir un devis gratuit"}>
                Le pack Plans & Avant projet comprend :
                <ol><li>- Plans au 1/100</li>
                    <li>- Plans de situation (parcelle)</li>
                    <li>- Plans de coupe</li>
                    <li>-  Plans de façade</li>
                    <li>- Plans de surface</li>
                    <li>- Plans de masse</li>
                    <li>- Plans de toiture</li>
                    <li>- insertion paysagère</li>
                    <li>- Modélisations 360°</li>
                </ol>
            </Card>
            <GuideProcess></GuideProcess>
           </LightLayout>
    );
};
export default Renovate;
