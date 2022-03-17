import React from "react";
import PageHeader from "../../components/Page-header";
import LightLayout from "../../layouts/light";
import Card from "../../components/Card";
const HowItWorks = () => {
    React.useEffect(() => {
        document.querySelector("body").classList.add("index3");
    }, []);
    return (
        <LightLayout footerClass={"mt-30"}>
            <PageHeader 
            imgSrc={"/assets/img/pg1.jpg"}
                title="La solution la plus simple !"
                fullPath={[
                    { id: 1, name: "Accueil", url: "/" },
                    { id: 2, name: "Comment ça marche?", url: "/how-it-woks" },
                ]}
            />
            <Card title={"1-Confiez votre projet"}>
                Complétez le formulaire en moins d’1 minute avec les informations de votre projet et en nous transmettant tout document utile (photos, plans, référence, etc…).Vous êtes pressés? Appelez nous au: <a href="">01 84 23 41 14</a>
            </Card>
            <Card title={"2-Votre expert habitat vous contacte sous 24H / 48H"} animation={"fadeInLeft"} >
                Votre expert habitat vous contacte afin de bien comprendre les spécificités de votre projet et vos attentes. Il vous donnera les vrais délais et prix du marché pour votre projet en fonction de votre région et vous proposera les meilleurs choix en fonction de votre budget.            </Card>
            <Card title={"3-Vous recevez votre devis"} animation={"fadeInRight"} >
                Votre expert habitat sélectionne pour vous le professionnel proche de chez vous le plus adapté à votre projet. Il négocie ensuite pour vous le devis afin de vous faire profiter d’un prix ultra compétitif grâce à notre pouvoir de négociation.            </Card>
            <Card title={"4-Vous acceptez et signez le devis"} animation={"fadeInDown"} >
                Après avoir réglé l’acompte en ligne, la mission est lancée. Nous faisons déplacer chez vous dans la semaine les architectes et entreprises pour prendre en considération tous vos besoins et vos contraintes. Ensuite ils travaillent à la réalisation de votre projet jusqu’à sa livraison en toute conformité.            </Card>
            <Card title={"5-Votre projet se réalise"} >
                L’architecte et l’entreprise sélectionnée réalisent votre projet avec prix et délais garantis. Vous pouvez suivre l’avancement du projet et échanger avec votre expert habitat tout au long de la mission. Votre projet bénéficie de la garantie décennale et de la protection juridique AXA. </Card>
        </LightLayout>
    );
};
export default HowItWorks;
