import React from "react";
import estimations from "../../data/estimation.json"
const Estimate = () => {
    const [estimation, setEstimation] = React.useState(0);
    const [email, setEmail] = React.useState();
    const [name, setName] = React.useState();
    const [phone, setPhone] = React.useState();
    const [renovation, setRenovation] = React.useState(0);
    const [conception, setConception] = React.useState(0);
    const [step, setStep] = React.useState(0);
    const [selectedOption, setSelectedOption] = React.useState();
    const calculate = (event) => {
        event.preventDefault()
        const selectedOptionData = estimations.find((item) => item.id === selectedOption);
        const value = document.getElementById(selectedOptionData.name).value
        setEstimation(selectedOptionData.factor * value);
        switch (selectedOptionData.title) {
            case 'Rénovation':
                setRenovation(value);
                break;
            case 'Conception':
                setConception(value);
                break;
        }
    }
    const onSubmitQuote = (event) => {
        event.preventDefault();
        fetch(`/.netlify/functions/saveQuote`, {
            method: 'POST',
            body: JSON.stringify( {
                'email':email,
                'conception':conception,
                'renovation':renovation,
                'name':name,
                'phone':phone
            })
        });

        alert("Devis envoyé avec succès. Un expert vous contactera d'ici peu.");
        window.location.href = '/'
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
                                    <h4 style={{ color: 'black' }} className="playfont"><span>Je veux une ...</span></h4>
                                </div>
                                <div className="messages"></div>
                                <div className="controls">
                                    {estimations.map(feat =>
                                        <div className="form-group" key={feat.name}
                                        >
                                            {step === 0 && <button onClick={() => { setStep(1); setSelectedOption(feat.id); }} className="btn-curve btn-color">{feat.title} </button>}
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
                        </div>
                        <div className="col-lg-5 col-md-6 contact-form wow fadeInLeft ml-5 mt-5"
                            data-wow-delay=".3s">
                        <form id="quote-form" onSubmit={onSubmitQuote}>
                                <div className="mt-20">
                                    <h6 style={{ color: 'black' }}>Ensuite</h6>
                                    <h4 style={{ color: 'black' }} className="playfont"><span>Je demande un devis</span></h4>
                                </div>
                                <div className="messages"></div>
                                <div className="controls">
                                    <div className="form-group">
                                        <input
                                            id={"name"}
                                            name={"name"}
                                            onChange={(event)=>setName(event.target.value)}
                                            placeholder={"Votre nom"}
                                            required="required"
                                        />
                                        <input
                                            id={"email"}
                                            onChange={(event)=>setEmail(event.target.value)}
                                            name={"email"}
                                            type={"email"}
                                            placeholder={"Votre email"}
                                            required="required"
                                        />
                                        <input
                                            id={"phone"}
                                            name={"phone"}
                                            onChange={(event)=>setPhone(event.target.value)}
                                            type={"number"}
                                            placeholder={"Votre téléphone"}
                                            required="required"
                                        />
                                    </div>
                                    <button onClick={onSubmitQuote} type="submit" className="btn-curve btn-color m-2">
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