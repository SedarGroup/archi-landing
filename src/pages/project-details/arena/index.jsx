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
    <MainLayout>
      <PageHeader imgSrc={"/assets/img/works/61.jpg"}
        title="Arène de lutte"
        fullPath={[
          { id: 1, name: "Accueil", url: "/" },
          { id: 2, name: "Réalisations", url: "/work" },
          { id: 3, name: "Arène de lutte", url: "/project-details/arena" },
        ]}
      />
      <ProjectIntro client={"j"} date={"2022"}/>
      <FourPics img1={"/assets/img/works/61.jpg"}
        img2={"/assets/img/works/62.jpg"}
        img3={"/assets/img/works/70.jpg"}
        img4={"/assets/img/works/72.jpg"}></FourPics>
      { }
      <NextProject bold={"Villa"} backgroundImage={"/assets/img/works/69.jpg"} text={"de luxe"} href={"villa"}/>
    </MainLayout>
  );
};
export default ProjectDetails;
