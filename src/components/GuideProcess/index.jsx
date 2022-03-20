import React from "react";
const GuideProcess = () => {
  return (
    <section
      className="process section-padding bg-img bg-repeat"
      style={{ backgroundImage: `url(/assets/img/dots.png)` }}
    >
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h6 className="custom-font wow fadeInDown" data-wow-delay=".3s">
                Comment ça marche?
              </h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                Processus
              </h4>
            </div>
          </div>
        </div>
        <div className=" row">
          <div
            className="col-lg-4 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{ backgroundImage: `url(/assets/img/how-it-works/1.jpg)` }}
              >
                <h3 className="numb custom-font">01</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">Commencez</h6>
                <p>Estimez-votre projet et obtenez un devis détaillé en quelques clics. Nous vous rappelons sous les 24h.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{ backgroundImage: `url(/assets/img/how-it-works/2.jpg)` }}
              >
                <h3 className="numb custom-font">02</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">Echangez avec nos experts</h6>
                <p>
                  Nos experts vous apportent des conseils sur-mesure, réalisent un devis à tarif négocié avec des professionnels de confiance.        </p>      </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{ backgroundImage: `url(/assets/img/how-it-works/5.jpg)` }}
              >
                <h3 className="numb custom-font">03</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">Lancez la mission</h6>
                <p>
                  Après acceptation du devis, les professionnels réalisent votre projet et votre expert habitat vous accompagne jusqu'à la livraison de vos travaux.</p>              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GuideProcess;
