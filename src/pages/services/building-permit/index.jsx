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
            <PageHeader imgSrc={"/assets/img/services/building-permit/1.webp"}
                title="Permis de construire"
                fullPath={[
                    { id: 1, name: "Accueil", url: "/" },
                    { id: 2, name: "Services", url: "/" },
                    { id: 2, name: "Conception", url: "/services/building-permit" },
                ]}
            />
            <Card imgSrc={"/assets/img/services/building-permit/22.webp"} title={"Qui peut demander une autorisation de construire ?"} imgLeft animation={"fadeInLeft"} showButton linkTo={'/quote'} buttonTitle={"Obtenir un devis gratuit"}>
                La demande de permis de construire doit être initiée par la personne physique ou morale <b>propriétaire des lieux </b>ou par une personne dûment mandatée. 
            </Card>
            <Card imgSrc={"/assets/img/services/building-permit/23.jpg"} title={"Quels sont les documents à fournir ?"} imgLeft animation={"fadeInLeft"} linkTo={'/quote'}>
                <ol>
                    <li> - Une demande manuscrite adressée au maire de la commune territorialement compétente</li>
                    <li> - Une copie du titre de propriété (titre foncier, permis d'occuper, attestation, bail ou droit de superficie)</li>
                    <li> - Un plan de situation et de délimitation du terrain d'assiette du projet ( c'est à dire sur lequel figure l'emplacement destiné à recevoir la construction); ce plan doit être certifié exact par le service du Cadastre</li>
                    <li> - 5 jeux de plan de construction architectural (situation, masse, plan, coupe, façade) à l'échelle de 1/100e</li>
                    <li> - Une fiche de renseignement portant sur le projet de construction</li>
                    <li> - Un devis descriptif du projet</li>
                    <li> -  Un plan de fosses sceptiques ou indiquer le système d'évacuation à l’égout s'il existe;</li>
                      Le dossier est composé en 7exemplaires, accompagné des éléments suivants :
                    <li> - Une taxe d'urbanisme (comprise entre 1 000 et 5 000 FCFA)</li>
                    <li> - Un timbre fiscal de 1 000 FCFA</li>
                </ol>
            </Card>
            <Card imgSrc={"/assets/img/services/building-permit/24.jpg"} title={"Quel est le coût ?"} imgLeft animation={"fadeInLeft"} showButton linkTo={'/quote'} buttonTitle={"Obtenir un devis gratuit"}>
                Le coût total varie selon les localités. Il se repartit ainsi :
                Une taxe d'urbanisme dont le montant varie de <b>1 000 à 5 000 FCFA</b>. 
                Un timbre fiscal de <b>1 000 FCFA</b>
            </Card>
            <GuideProcess></GuideProcess>
        </LightLayout>
    );
};
export default Renovate;
