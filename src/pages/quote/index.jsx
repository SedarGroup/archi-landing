import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import Estimate from "../../components/Estimate";
const Work1 = () => {
    React.useEffect(() => {
        document.querySelector("body").classList.add("index3");
    }, []);
    return (
        <MainLayout title={"Demander un devis"}>
            <WorkHeader
                title={{
                    first: "Nous offrons des services à des prix abordables",
                    second: "",
                }}
                content="Choisissez Sedar pour faire chiffrer et réaliser votre projet en toute sérénité!"
            />
            <Estimate />

        </MainLayout>
    );
};
export default Work1;
