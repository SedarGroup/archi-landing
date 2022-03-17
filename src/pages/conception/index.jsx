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
            <PageHeader imgSrc={"/assets/img/pg4.jpg"}
                title="Estimez le coût de la conception"
                fullPath={[
                    { id: 1, name: "Accueil", url: "/" },
                    { id: 3, name: "Conception", url: "/conception" },
                ]}
            />
            <GuideProcess></GuideProcess>
            <Card linkTo={'quote'} title={"Votre construction de maison sereinement avec un architecte"} showButton buttonTitle="Confier un devis">
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
            <Card title={"Quels sont les prix au m² pour la construction d’une maison neuve ?"} imgLeft animation={"fadeInLeft"} showButton linkTo={'quote'} buttonTitle={"Demander une estimation personnalisée"}>
                De la conception à la remise des clés, en passant par l’obtention du permis de construire, plusieurs étapes vont succéder pour la construction de votre maison. S’il est difficile d’établir précisément le coût de construction d’une maison, on peut estimer un budget global pour chacune des étapes de la construction, tel le gros œuvre, le second œuvre et les finitions.
                Le coût de construction d’une maison individuelle variera ainsi en fonction du type de construction, l’emplacement, la taille et les types de matériaux. Pour que vous ayez accès aux prix transparents dans la construction de maison, voici les moyennes réelles du marché:
                <ol><li> <b>- 1000€ TTC par m2 </b> pour une construction en gros oeuvre</li>
                    <li> <b>- 1200€ TTC – 1500€</b> TTC par m2 pour une construction traditionnelle</li>
                    <li> <b>- 1800€ TTC – 2500€</b> TTC par m2 pour une construction moderne</li>
                    <li> <b>- 1600€ TTC – 2500€</b>TTC par m2 pour une construction en ossature bois ou passive</li>
                </ol>Chez Sedar, nous pensons que chaque projet mérite un architecte. Il faut savoir cependant que les honoraires des architectes sont entre 3% à 10% du coût de la construction et contrairement aux idées reçues, ces coûts ne sont pas plus élevés que lorsque l’on fait appel à un constructeur de maisons individuelles.
                L’un des services les plus essentiels apportés par l’architecte consiste à adapter le projet au budget. Pour cela, il réalise un appel d’offres aux différents entreprises générales du bâtiment ou artisans afin de connaître leur prix pour chaque étape de la construction, et optimise les dépenses en fonction.
            </Card>
            <Card title={"Construction de maison neuve : sur quoi se reposent les postes de coûts ?"} animation={"fadeInRight"} >
                <p> <b>Terrain et excavation</b> : Préparer le terrain pour la construction est une première étape importante, là le prix veut fortement varier. Dans la plupart des projets, le terrain est déjà préparé pour la construction. Si vous avez acheté votre propre lot, vous devrez peut-être embaucher un pro pour l’excavation.
                </p><p><b>Taille de la maison</b> : Une maison avec une plus grande superficie coûtera plus chère qu’une maison plus petite.
                </p><p> <b> Forme </b>: Plus la maison demande une forme particulière, plus elle sera chère. Cependant, les formes inhabituelles sont plus fréquentes dans les conceptions personnalisées.
                </p><p><b>Type de toit</b> : Les coûts d’installation et d’entretien des toitures spécialisées coûteront plus cher que les toitures conventionnelles.
                </p><p><b> Finitions</b> : La qualité des luminaires peut avoir un impact sur le coût d’une maison, les comptoirs de granite et les carreaux de sol en marbre sont des options haut de gamme etc. La plupart des pros peuvent recommander des matériaux et des accessoires qui répondront à vos besoins esthétiques et budgétaires.
                </p>
            </Card>
        </LightLayout>
    );
};
export default Renovate;
