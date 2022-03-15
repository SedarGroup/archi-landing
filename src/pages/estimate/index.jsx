import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";
import Estimate from "../../components/Estimate";
const Work1 = () => {
    React.useEffect(() => {
        document.querySelector("body").classList.add("index3");
    }, []);
    return (
        <MainLayout>
            <WorkHeader
                title={{
                    first: "Nous offrons des services à des prix abordables",
                    second: "",
                }}
                content="Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum mi."
            />
            <Estimate />
        </MainLayout>
    );
};
export default Work1;
