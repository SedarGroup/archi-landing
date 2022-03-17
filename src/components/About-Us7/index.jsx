import React from "react";
import Link from "next/link";

const AboutUs7 = () => {
  return (
    <section className="intro section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <h2>Solutions créatives</h2>
              <p>
                Cras vel cursus libero. Vestibulum porttitor nunc enim, quis
                congue leo fringilla ut. Quisque in lacus lacus. Nunc malesuada
                nisi at porta convallis. In posuere interdum erat, et bibendum
                arcu. Etiam quis viverra diam.
              </p>
              <Link href="/about">
                <a className="btn-curve btn-color mt-30">
                  <span>Plus ...</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="exp">
              <h4>25</h4>
              <h5>Années d'Experience</h5>
              <span>Depuis 2020</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs7;
