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
    <MainLayout title={"Villa Lèye"}>
      <PageHeader imgSrc={"/assets/img/works/83.jpeg"}
        title="Immeuble Sarr"
        fullPath={[
          { id: 1, name: "Accueil", url: "/" },
          { id: 2, name: "Réalisations", url: "/work" },
          { id: 3, name: "Immeuble Sarr", url: "/project-details/sarr-building" },
        ]}
      />
      <ProjectIntro client={"Lèye"} desc={"Immeuble"} categories={"Extérieur, Intérieur"} date={"2022"} />
      <FourPics img1={"/assets/img/works/83.jpeg"}
        img2={"/assets/img/works/84.jpeg"}
        img3={"/assets/img/works/85.jpeg"}
        img4={"/assets/img/works/83.jpeg"}></FourPics>
      { }
      <NextProject bold={"Arène"} backgroundImage={"/assets/img/works/61.jpg"} text={"de lutte"} href={"arena"} />
    </MainLayout>
  );
};
export default ProjectDetails;
