import React from "react";

const Process = () => {
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
            className="col-lg-3 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{ backgroundImage: `url(/assets/img/process/01.jpg)` }}
              >
                <h3 className="numb custom-font">01</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">Confiez votre projet</h6>
                <p>Complétez le formulaire en moins d’1 minute avec les informations de votre projet et en nous transmettant tout document utile (photos, plans, référence, etc…).</p>
                <p> Vous êtes pressés? Appelez nous au <a href="tel:0000"><span>01 84 23 41 14</span></a></p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{ backgroundImage: `url(/assets/img/process/02.jpg)` }}
              >
                <h3 className="numb custom-font">02</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">Design Process</h6>
                <p> 

Votre expert habitat vous contacte afin de bien comprendre les spécificités de votre projet et vos attentes. Il vous donnera les vrais délais et prix du marché pour votre projet en fonction de votre région et vous proposera les meilleurs choix en fonction de votre budget.</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{ backgroundImage: `url(/assets/img/process/03.jpg)` }}
              >
                <h3 className="numb custom-font">03</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">Supervision</h6>
                <p>Votre expert habitat sélectionne pour vous le professionnel proche de chez vous le plus adapté à votre projet. Il négocie ensuite pour vous le devis afin de vous faire profiter d’un prix ultra compétitif grâce à notre pouvoir de négociation.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".6s">
            <div className="item">
              <div
                className="bg-img"
                style={{ backgroundImage: `url(/assets/img/process/04.jpg)` }}
              >
                <h3 className="numb custom-font">04</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">Budget Planning</h6>
                <p>Nulla metus metus ullamcorper vel tincidunt sed euismod.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
