import React from "react";
import MainLayout from "../../../layouts/main";
import PageHeader from "../../../components/Page-header";
import ProjectIntro from "../../../components/Project-Intro";
import NextProject from "../../../components/Next-Project";
import ProjectVideo from "../../../components/Project-Video";
import FourPics from "../../../components/FourPics";
const ProjectDetails = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout title={"Immeuble"}>
      <PageHeader imgSrc={"/assets/img/works/76.jpg"}
        title="Immeuble d'hébergement"
        fullPath={[
          { id: 1, name: "Accueil", url: "/" },
          { id: 2, name: "Réalisations", url: "/work" },
          { id: 3, name: "Immeuble d'hébergement", url: "/project-details/lodging" },
        ]}
      />
      <ProjectIntro client={"df"} desc={"La villa"} categories={"Extérieur, Intérieur"} date={"2019"} />
      <FourPics img1={"/assets/img/works/76.jpg"}
        img2={"/assets/img/works/77.jpg"}
        img3={"/assets/img/works/78.jpg"}
        img4={"/assets/img/works/79.jpg"}></FourPics>
      { }
      <NextProject bold={"Arène"} backgroundImage={"/assets/img/works/61.jpg"} text={"de lutte"} href={"arena"} />
    </MainLayout>
  );
};
export default ProjectDetails;
