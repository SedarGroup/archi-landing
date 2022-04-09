import React from "react";
import PageHeader from "../../components/Page-header";
import LightLayout from "../../layouts/light";
import Card from "../../components/Card";
import { onCallClick } from "../../utils";
const HowItWorks = () => {
    React.useEffect(() => {
        document.querySelector("body").classList.add("index3");
    }, []);
    return (
        <LightLayout title={"Comment ça marche?"}footerClass={"mt-30"}>
            <PageHeader
                imgSrc={"/assets/img/pg2.jpg"}
                title="La solution la plus simple !"
                fullPath={[
                    { id: 1, name: "Accueil", url: "/" },
                    { id: 2, name: "Comment ça marche?", url: "/how-it-works" },
                ]}
            />
            <Card title={"1-Confiez votre projet"} imgSrc={"/assets/img/how-it-works/1.jpg"}>
                Estimez votre projet en moins de 30 secondes, puis envoyez un mail au <b><a href="mailto:sedargroup.sn@gmail.com">sedargroup.sn@gmail.com </a></b> avec les documents nécessaires (photos, plans, référence, etc…).Vous êtes pressés? Appelez sur WhatsApp: <b><a onClick={onCallClick}>+221 76 153 96 35</a></b>.            </Card>
            <Card title={"2-Votre expert habitat vous contacte sous 24H / 48H"} animation={"fadeInLeft"} imgSrc={"/assets/img/how-it-works/2.jpg"} >
                Votre expert habitat vous contacte afin de bien comprendre les spécificités de votre projet et vos attentes. Il vous donnera les vrais délais et prix du marché pour votre projet en fonction de votre région et vous proposera les meilleurs choix en fonction de votre budget.            </Card>
            <Card title={"3-Vous recevez votre devis"} animation={"fadeInRight"} imgSrc={"/assets/img/how-it-works/3.jpg"} >
                Votre expert habitat sélectionne pour vous le professionnel proche de chez vous le plus adapté à votre projet. Il négocie ensuite pour vous le devis afin de vous faire profiter d’un prix ultra compétitif grâce à notre pouvoir de négociation.            </Card>
            <Card title={"4-Vous acceptez et envoyez une avance"} animation={"fadeInDown"} imgSrc={"/assets/img/how-it-works/4.jpg"}>
                Après avoir accepté le devis, la mission est lancée. Vous payez une partie par Orange money ou Wave. Nos architectes se mettent au travail et vous propose les plans qui vous conviennent.
            </Card>
            <Card title={"5-Votre projet se réalise"} imgSrc={"/assets/img/how-it-works/5.jpg"}>
            Les architectes, sous votre commande, réalisent le projet. Et en tout temps vous pourrez vérifier l'avancement du projet                 </Card>
        </LightLayout>
    );
};
export default HowItWorks;
