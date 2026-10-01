import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import Estimate from "../../components/Estimate";
const Work1 = () => {
    React.useEffect(() => {
        document.querySelector("body").classList.add("index3");
    }, []);
    return (
        <MainLayout title={"Acheter un Appartement"}>
            <WorkHeader
                title={{
                    first: "Les types d'appartements que nous vous offrons",
                    second: "",
                }}
                content="Choisissez le type d'appartement qui vous correspond."
                bgImage="/assets/img/portfolio/mas/01.jpg"
            />
            <Estimate />

        </MainLayout>
    );
};
export default Work1;
