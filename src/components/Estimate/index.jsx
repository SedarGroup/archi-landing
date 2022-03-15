import React from "react";
import appData from "../../data/app.json";
import estimations from "../../data/estimation.json"
const Estimate = () => {
  const [estimation, setEstimation] = React.useState(0);
  const calculate = (event) => {
    event.preventDefault()
    const sum = estimations.reduce((prev, current) => {
      return prev + current.factor * document.getElementById(current.name).value
    }, 0);
    setEstimation(sum);
  }
  return (
    <>
      <section className="contact cont-map">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-6 contact-form wow fadeInLeft"
              data-wow-delay=".3s"
            >
              <form id="estimate-form" onSubmit={calculate}>
                <div className="section-head">
                  <h6>Nos tarifs</h6>
                  <h4 className="playfont">Estimez</h4>
                </div>
                <div className="messages"></div>
                <div className="controls">
                  {estimations.map(feat =>
                    <div className="form-group" key={feat.name}
                    >
                      <input
                        key={feat.name}
                        id={feat.name}
                        min={0}
                        type="number"
                        name={feat.name}
                        placeholder={feat.name}
                        required="required"
                      />
                    </div>)}
                  <button type="submit" className="btn-curve btn-color">
                    <span>Calculer</span>
                  </button>
                  <p className="nbr mt-20">              {estimation} CFA
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Estimate;
