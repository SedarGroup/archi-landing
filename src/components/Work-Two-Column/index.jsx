/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

export const WorkTwoColumn = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works filter-img section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-lg-6 items mt-0 interior theaters residential">
              <div className="section-head mb-0">
                <h3>Travaux</h3>

                <div className="filtering mt-30">
                  <div className="filter">
                    <span data-filter="*" className="active">
                      Tout
                    </span>
                    <span data-filter=".interior">Interieur</span>
                    <span data-filter=".exterior">Extérieur</span>
                    <span data-filter=".residential">Residentiel</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items exterior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/61.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Arène de lutte</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Moderne</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items residential interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/63.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Spa</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Moderne</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items interior residential">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/68.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Villa moderne</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Moderne</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items exterior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/62.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Arène de lutte</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Moderne</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/65.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Spa</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Moderne</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
