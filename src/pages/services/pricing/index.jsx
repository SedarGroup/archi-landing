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
                title="Pack conception zen - plans & avant projet"
                fullPath={[
                    { id: 1, name: "Accueil", url: "/" },
                    { id: 2, name: "Services", url: "/" },
                    { id: 2, name: "Conception", url: "/services/conception" },
                ]}
            />
            <GuideProcess></GuideProcess>
            <section className="blog section-padding">
                <div className="container">
                    <div className="section-head">
                        <h3>Tarifs</h3>
                    </div>
                    <div className="row">
                        <ImgCard/>
                        <ImgCard/>
                        <ImgCard/>
                    </div>
                </div>
            </section>
        </LightLayout>
    );
};
export default Renovate;
