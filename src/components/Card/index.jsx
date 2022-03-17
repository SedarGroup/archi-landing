import React from "react";
import aboutUs2Data from "../../data/about-us2.json";
import Link from 'next/link'
const Card = ({ title, showButton = false, tags = false, children, noImg = false, animation = "fadeInUp", linkTo = "/about", buttonTitle = 'Plus...', imgLeft }) => {
  return (
    <section className="about p-3">
      <div className="container">
        <div className="row">
          <div style={imgLeft && { left: '50%' }} className={`col-lg-${noImg ? 12 : 6} valign`}>
            <div
              className={`exp-content nopat wow ${animation}`}
              data-wow-delay=".3s"
            >
              { }
              <h2 className="mb-20 playfont">
                {title} <br />
              </h2>
              <p>{children}</p>
              {tags && <ul>
                {aboutUs2Data.textList.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>}
              {showButton && <Link href={linkTo}>
                <a className="btn-curve btn-color mt-30">
                  <span>{buttonTitle}</span>
                </a>
              </Link>}
            </div>
          </div>
          {!noImg && <div style={imgLeft && { right: '50%' }} className="col-lg-6">
            <div className="ab-exp">
              <div className="row">
                <div className="col-md-4">
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
              </div>
            </div>
          </div>}
        </div>
      </div>
    </section>
  );
};
export default Card;
