import React from "react";
import estimations from "../../data/estimation.json"
const Estimate = () => {
    const [estimation, setEstimation] = React.useState(0);
    const [step, setStep] = React.useState(0);
    const [selectedOption, setSelectedOption] = React.useState();
    const calculate = (event) => {
        event.preventDefault()
        const selectedOptionData = estimations.find((item) => item.id === selectedOption);
        setEstimation(selectedOptionData.factor * document.getElementById(selectedOptionData.name).value)
    }
    const onSubmitQuote = (event) => {
        event.preventDefault()
    }
    return (
        <div>
            <section className="contact cont-map">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-5 col-md-6 contact-form wow fadeInLeft"
                            data-wow-delay=".3s"
                        >
                            <form id="estimate-form" onSubmit={calculate}>
                                <div className="section-head">
                                    <h6 style={{ color: 'black' }}>Nos tarifs</h6>
                                    <h4 style={{ color: 'black' }} className="playfont"><span>Estimez votre projet</span></h4>
                                </div>
                                <div className="messages"></div>
                                <div className="controls">
                                    {estimations.map(feat =>
                                        <div className="form-group" key={feat.name}
                                        >
                                            {step === 0 && <button onClick={() => { setStep(1); setSelectedOption(feat.id) }} className="btn-curve btn-color">{feat.title} </button>}
                                            {step === 1 && selectedOption === feat.id && <input
                                                key={feat.name}
                                                id={feat.name}
                                                min={0}
                                                type="number"
                                                name={feat.name}
                                                placeholder={feat.name}
                                                required="required"
                                            />}
                                        </div>)}
                                    {step === 1 && <div className="row justify-content-center">
                                        <button onClick={() => { setStep(step - 1); setEstimation(0) }} className="btn-curve m-2">Retour</button>
                                        <button type="submit" className="btn-curve btn-color m-2">
                                            <span>Calculer</span>
                                        </button></div>}
                                    {estimation != 0 && <p className="nbr mt-20">              {estimation} CFA
                                    </p>}
                                </div>
                            </form>
                            <form id="quote-form" onSubmit={onSubmitQuote}>
                                <div className="mt-20">
                                    <h6 style={{ color: 'black' }}>Ou</h6>
                                    <h4 style={{ color: 'black' }} className="playfont"><span>Demandez un devis</span></h4>
                                </div>
                                <div className="messages"></div>
                                <div className="controls">
                                    <div className="form-group">
                                        <input
                                            id={"name"}
                                            name={"name"}
                                            placeholder={"Votre nom"}
                                            required="required"
                                        />
                                        <input
                                            id={"email"}
                                            name={"email"}
                                            type={"email"}
                                            placeholder={"Votre email"}
                                            required="required"
                                        />
                                        <input
                                            id={"phone"}
                                            name={"phone"}
                                            type={"number"}
                                            placeholder={"Votre téléphone"}
                                            required="required"
                                        />
                                    </div>
                                    <button type="submit" className="btn-curve btn-color m-2">
                                       Obtenir un devis
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Estimate;