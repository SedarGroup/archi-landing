/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs1 from "../../components/About-Us1";
import Services1 from "../../components/Services1";
import IntroWithHorizontal from "../../components/Intro-with-horizontal";
import LightLayout from "../../layouts/light";
import Portfolio1 from "../../components/Portfolio1";
import Team1 from "../../components/Team1";
import Contact from "../../components/Contact";
import Offers from "../../components/Offers";
import HomeValues from "../../components/HomeValues";
import HomeCta from "../../components/HomeCta";

const Home1 = () => {
  React.useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("homepage");
    return () => body.classList.remove("homepage");
  }, []);
  return (
    <LightLayout
      title={"Sédar Group — Architecture, construction et rénovation au Sénégal"}
      description={
        "Sédar Group vous accompagne de la conception à la remise des clés : plans d'architecte, construction de maison, rénovation et achat d'appartement à Dakar et partout au Sénégal."
      }
      footerClass={"mt-30"}
    >
      <div className="sg-home">
        <IntroWithHorizontal />
        <HomeValues />
        <Offers />
        <AboutUs1 />
        <Services1 />
        <Portfolio1 />
        <HomeCta />
        <Team1 />
        <Contact />
      </div>
    </LightLayout>
  );
};

export default Home1;
