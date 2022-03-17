import React from "react";
import PageHeader from "../../../components/Page-header";
import LightLayout from "../../../layouts/light";
import ImgCard from "../../../components/imgCard";
import GuideProcess from "../../../components/GuideProcess"
const Renovate = () => {
    React.useEffect(() => {
        document.querySelector("body").classList.add("index3");
    }, []);
    return (
        <LightLayout footerClass={"mt-30"}>
            <PageHeader
                title="Vos travaux n’ont jamais été aussi simples"
                fullPath={[
                    { id: 1, name: "Accueil", url: "/" },
                    { id: 2, name: "Services", url: "/" },
                    { id: 2, name: "Prix et tarifs", url: "/services/pricing" },
                ]}
            />
            <section className="blog section-padding">
                <div className="container">
                    <div className="section-head">
                        <h3>Tarifs</h3>
                    </div>
                    <div className="row">
                        <ImgCard>
                            <p>Une terrasse peut avoir subie quelques dommages pendant l’hiver et faire un peu grise mine.</p>
                            <p> Parfois le nettoyage saisonnier fait par vos soins n’est pas suffisant, surtout si votre terrasse commence à être ancienne.</p>
                            <p>Il est difficile de chiffrer exactement le coût car cela pourra dépendre de la <b>technique utilisée</b>, des <b> matériaux </b>(selon le style, la taille et de la configuration de votre maison et le climat) et de la <b>complexité des travaux</b> à faire.
                                En moyenne, il faut compter un budget pouvant aller de <b>16 à 155 euros / m²</b> pour les matériaux.
                                À ceci, il faudra ajouter les frais de pose (à faire chiffrer sur un devis) : comptez en moyenne une fourchette comprise entre <b>30 et 60 euros / m²</b>.
                            </p></ImgCard>
                        <ImgCard ></ImgCard>
                        <ImgCard ></ImgCard>
                    </div>
                </div>
            </section>
            <GuideProcess></GuideProcess>
        </LightLayout>
    );
};
export default Renovate;
