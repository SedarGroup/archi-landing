/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutUs2Data from "../../data/about-us2.json";
import Link from 'next/link'

const Card = ({title, showButton=false, tags=false, children, animation="fadeInUp"}) => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div
              className={`exp-content nopat wow ${animation}`}
              data-wow-delay=".3s"
            >
             {/* / <h6 className="sub-title">{title}</h6> */}
              <h2 className="mb-20 playfont">
              {title} <br />
              </h2>
              <p>{children}</p>
              {tags && <ul>
                {aboutUs2Data.textList.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>}
              {showButton && <Link href="/about">
                <a className="btn-curve btn-color mt-30">
                  <span>Plus ...</span>
                </a>
              </Link>}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ab-exp">
              <div className="row">
                <div className="col-md-4 mb-20">
                  <div
                    className="pattern bg-img bg-repeat"
                    style={{
                      backgroundImage: `url(/assets/img/line-pattern.png)`,
                    }}
                  ></div>
                </div>
                <div className="col-md-8 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img mb-20 wow imago">
                    <img src={aboutUs2Data.image1} alt="" />
                  </div>
                </div>
                <div className="col-md-7 wow fadeInUp" data-wow-delay=".3s">
                  <div className="img wow imago">
                    <img src={aboutUs2Data.image2} alt="" />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="years-exp">
                    <div className="exp-text">
                      <h2 className="custom-font">{aboutUs2Data.exp}</h2>
                      <h6>Years Of Experience</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
