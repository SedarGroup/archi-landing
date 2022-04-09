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
    <MainLayout title={"Villa"}>
      <PageHeader imgSrc={"/assets/img/works/69.jpg"}
        title="Villa de luxe"
        fullPath={[
          { id: 1, name: "Accueil", url: "/" },
          { id: 2, name: "Réalisations", url: "/work" },
          { id: 3, name: "Villa de luxe", url: "/project-details/villa" },
        ]}
      />
      <ProjectIntro client={"df" }desc={"La villa"} categories={"Extérieur, Intérieur"} date={"2017"}/>
      <FourPics img1={"/assets/img/works/68.jpg"}
        img2={"/assets/img/works/69.jpg"}
        img3={"/assets/img/works/75.jpg"}
        img4={"/assets/img/works/69.jpg"}></FourPics>
      { }
      <NextProject bold={"SPA"} backgroundImage={"/assets/img/works/66.jpg"} text={"moderne"} href={"spa"}/>
    </MainLayout>
  );
};
export default ProjectDetails;
