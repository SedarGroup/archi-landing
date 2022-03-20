import React from "react";
import offersData from "../../data/offers.json";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
const Offers = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="portfolio section-padding">
        <div className="container-fluid">
          <div className="container">
            <div className="section-head text-center">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10">
                  <h6 className="wow fadeInDown" data-wow-delay=".3s">
                    Offres
                  </h6>
                  <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                    Services
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="gallery twsty full-width">
              {offersData.map((item) => (
                <div
                  key={item.id}
                  className={`items mt-50 wow fadeInUp `}
                  data-wow-delay=".3s"
                >
                  <div
                    className="item-img bg-img wow imago s"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  >
                    <a href={item.url} style={{ position: "absolute", top: "40%", left: "40%", alignSelf: "center",zIndex:5 }} className="btn-curve btn-color "> <span>{item.title}</span></a>
                    <div className="item-img-overlay">
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Offers;
