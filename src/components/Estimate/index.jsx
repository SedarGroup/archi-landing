import React from "react";
import { useEffect } from "react";
import estimations from "../../data/estimation.json"
const Estimate = () => {
    const [estimation, setEstimation] = React.useState(0);
    const [email, setEmail] = React.useState();
    const [name, setName] = React.useState();
    const [phone, setPhone] = React.useState();
    const [surface, setSurface] = React.useState(0);
    const [message, setMessage] = React.useState();
    const [step, setStep] = React.useState(0);
    const [selectedOption, setSelectedOption] = React.useState({});
    useEffect(() => {
        if (estimations[selectedOption[0]]?.title) {
            setMessage(`${estimations[selectedOption[0]]?.title}`)
        }
        if(estimations[selectedOption[0]]?.children[selectedOption[1]]?.title){
            setMessage(`${estimations[selectedOption[0]]?.title}/${ estimations[selectedOption[0]]?.children[selectedOption[1]]?.title}`)

        }
    }, [selectedOption])
    const calculate = (event) => {
        console.log(event)
        event.preventDefault();
        const selectedOptionData = estimations[selectedOption[0]].children[selectedOption[1]];
        if (selectedOptionData.title === 'Autre') {
            document.getElementById("name").focus()
        }
        else {
            const value = document.getElementById("surface").value
            setEstimation(selectedOptionData.factor * value);
        }
    }
    const onSubmitQuote = (event) => {
        const option1 = estimations[selectedOption[0]]?.title;
        const option2 = estimations[selectedOption[0]]?.children[selectedOption[1]]?.title;
        const other = document.getElementById('other')?.value;
        event.preventDefault();
        if (email && name && phone) {
            fetch(`/.netlify/functions/saveQuote`, {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    option1,
                    option2,
                    surface,
                    name,
                    phone,
                    other
                })
            });
            alert("Devis envoyé avec succès. Un expert vous contactera d'ici peu.");
            window.location.href = '/'
        }
        else {
            alert("Veuillez remplir tous les champs")
        }
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            calculate(event)
        }
    }
    const renderOptions = (feat, index, step) => {
        return (<div className="form-group" key={feat.title}
        >
            <button onClick={() => { setStep(step + 1); setSelectedOption({ ...selectedOption, [step]: index }); }} className="btn-curve btn-color">{feat.title} </button>
        </div>)
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
                                    <h5 style={{ color: 'black' }} className="playfont"><span>{message}</span></h5>
                                </div>
                                <div className="messages"></div>
                                <div className="controls">
                                    {step === 0 && estimations.map((feat, index) => renderOptions(feat, index, 0))}
                                    {step === 1 && estimations[selectedOption[0]].children.map((feat, index) =>
                                        renderOptions(feat, index, 1))}
                                    {step === 2 && (estimations[selectedOption[0]].children[selectedOption[1]].title !== 'Autre' ? <input
                                        id="surface"
                                        min={0}
                                        onKeyPress={handleKeyPress}
                                        type="number"
                                        onChange={(event) => setSurface(event.target.value)}
                                        name={"surface"}
                                        placeholder={"Surface (m2)"}
                                        required="required"
                                    /> : <input
                                        id="other"
                                        onKeyPress={handleKeyPress}
                                        name={"other"}
                                        placeholder={"Veuillez Préciser"}
                                        required="required"
                                    />)}
                                    <div className="row justify-content-center">
                                        {step > 0 && <button type="button" onClick={() => { setSelectedOption({ ...selectedOption, [step]: null }); setStep(step - 1); setEstimation(0) }} className="btn-curve m-2">Retour</button>
                                        }
                                        {step === 2 && <button type="submit" className="btn-curve btn-color m-2">
                                            {estimations[selectedOption[0]].children[selectedOption[1]].title !== 'Autre' ? "Calculer" : "Demander un devis"}
                                        </button>}</div>
                                    {estimation != 0 && <p className="nbr mt-20">              {estimation} CFA
                                    </p>}
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5 col-md-6 contact-form wow fadeInRight ml-5 mt-5"
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
                                            onChange={(event) => setName(event.target.value)}
                                            placeholder={"Votre nom"}
                                            required="required"
                                        />
                                        <input
                                            id={"email"}
                                            onChange={(event) => setEmail(event.target.value)}
                                            name={"email"}
                                            type={"email"}
                                            placeholder={"Votre email"}
                                            required="required"
                                        />
                                        <input
                                            id={"phone"}
                                            name={"phone"}
                                            onChange={(event) => setPhone(event.target.value)}
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