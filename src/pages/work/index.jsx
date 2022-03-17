/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const Work1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "L'architecture est un art visuel,",
          second: "et les constructions parlent d'elles même",
        }}
        // title = "text",
        content="Découvrez nos réalisations"
      />
      <WorkTwoColumn />
    </MainLayout>
  );
};

export default Work1;
