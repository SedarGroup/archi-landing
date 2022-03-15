/* eslint-disable @next/next/no-img-element */
import React from "react";
import Estimate from "../Estimate";

const EstimateContainer = () => {
  return (
    <section className="blog-grid section-padding mb-50">
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h6 className="wow fadeInDown" data-wow-delay=".3s">
                 Nos tarifs
              </h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                Estimez
              </h4>
            </div>
          </div>
        </div>
         <Estimate></Estimate>
      </div>
    </section>
  );
};

export default EstimateContainer;
