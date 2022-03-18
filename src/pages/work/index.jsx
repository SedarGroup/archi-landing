/* eslint-disable @next/next/no-img-element */
import React from "react";
import LightLayout from "../../layouts/light";
import GuideProcess from "../../components/GuideProcess"
import IntroWithHorizontal3 from "../../components/Intro-with-horizontal3";


const Work1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <LightLayout>
      <IntroWithHorizontal3 />
      <GuideProcess/>
    </LightLayout>
  );
};

export default Work1;
