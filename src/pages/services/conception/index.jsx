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
            <PageHeader imgSrc={"/assets/img/pg6.jpg"}
                title="Pack conception zen - plans & avant projet"
                fullPath={[
                    { id: 1, name: "Accueil", url: "/" },
                    { id: 2, name: "Services", url: "/" },
                    { id: 2, name: "Conception", url: "/services/conception" },
                ]}
            />
          <Card imgSrc={"/assets/img/services/conception/41.jpg"}title={"Que comprend le pack conception zen ? A quel prix ?"} imgLeft animation={"fadeInLeft"} showButton linkTo={'/quote'} buttonTitle={"Obtenir un devis gratuit"}>
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
