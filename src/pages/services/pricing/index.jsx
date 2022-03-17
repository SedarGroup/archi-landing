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
                        <ImgCard >
                            <p><b>Changer une vasque</b> ou faire installer une <b>douche italienne </b>permettent de donner un petit coup de neuf à une salle de bain. Mais pour celles et ceux qui veulent refaire complètement cette pièce d’eau, les prix peuvent varier du simple au triple, selon le type de travaux à prévoir et la <b>qualité des matériaux</b> choisis. Pour les rénovations d’une <b>petite surface </b> (inférieure à 6 m²) : <b>entre 5 100 et 7 200 euros TTC </b>(exemple : installation lavabo + WC). Une rénovation d’une SDB moyenne (8-9 m²) se situe entre 6 100 et 10 200 euros TTC (exemple : remplacement d’une ancienne baignoire). Le prix de la rénovation d’une grande surface de salle de bain (plus de 9 m²) est entre 8 100 et 15 200 euros TTC (exemple :  installation d’une double vasque).</p></ImgCard>
                        <ImgCard ><p>Le budget de la rénovation complète d’un appartement ou d’une maison va surtout dépendre de la nature des travaux et de l’état du bien.
                            Si vous souhaitez rénover complètement un appartement déjà habité pour le rafraîchir, vous pouvez compter un budget entre 250€ TTC / m2 et 500€ TTC / m2.
                            Cependant, si vous voulez déplacer des cloisons, refaire les salles de bains, les sanitaires, les peintures, le sol et la cuisine, il faudra compter 1000€ TTC minimum par mètre carré.
                            En ce qui concerne la rénovation d’une maison, les mêmes ratios au m2 sont applicables mais il ne faut pas oublier le budget de démolition et le prix d’une potentielle rénovation de toiture ou la réalisation d’une nouvelle isolation.</p></ImgCard>
                    </div>
                </div>
            </section>
            <GuideProcess></GuideProcess>
        </LightLayout>
    );
};
export default Renovate;
