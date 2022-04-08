import React from "react";
import { useEffect } from "react";
import estimations from "../../data/estimation.json";
import {validateEmail} from "../../utils"
const Estimate = () => {
    const [estimation, setEstimation] = React.useState(0);
    const [email, setEmail] = React.useState();
    const [name, setName] = React.useState();
    const [phone, setPhone] = React.useState();
    const [surface, setSurface] = React.useState(0);
    const [message, setMessage] = React.useState();
    const [other, setOther]= React.useState();
    const [step, setStep] = React.useState(0);
    const [selectedRegion, setSelectedRegion] = React.useState("Dakar");
    const regions = ["Dakar", "Ziguinchor", "Diourbel", "Saint-Louis", "Tambacounda", "Kaolack", "Thiès", "Louga", "Fatick", "Kolda", "Matam", "Kaffrine", "Kédougou", "Sédhiou"]
    const [selectedOption, setSelectedOption] = React.useState({});
    useEffect(() => {
        if (step > 0) {
            if (estimations[selectedOption[0]]?.title) {
                setMessage(`${estimations[selectedOption[0]]?.title}`)
            }
            if (estimations[selectedOption[0]]?.children[selectedOption[1]]?.title) {
                setMessage(`${estimations[selectedOption[0]]?.title}/${estimations[selectedOption[0]]?.children[selectedOption[1]]?.title}`)
            }
        }
        else { setMessage() }
    }, [step])
    const goToStep3 = () => {
        const selectedOptionData = estimations[selectedOption[0]].children[selectedOption[1]];
        if (selectedOptionData.title === 'Autre') {
            if (!other) {
                alert('Veuillez préciser')
            }
        }
            if (surface) {
                setEstimation(selectedOptionData.factor * surface);
                setStep(3);
            }
            else {
                alert('Veuillez entrer la surface en m2')
            }
        
    }
    const onSubmitQuote = (event) => {
        const option1 = estimations[selectedOption[0]]?.title;
        const option2 = estimations[selectedOption[0]]?.children[selectedOption[1]]?.title;
        event.preventDefault();
        if (email && name && phone) {
            if (validateEmail(email)){
                console.log(other)
            fetch(`/.netlify/functions/saveQuote`, {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    option1,
                    option2,
                    surface,
                    name,
                    phone,
                    other,
                    region: selectedRegion
                })
            })}
            else {
                alert("Email non valide");
                return
            };
            alert("Devis envoyé avec succès. Un expert vous contactera d'ici peu.");
            window.location.href = '/'
        }
        else {
            alert("Veuillez remplir tous les champs")
        }
    }
    const handleStep2KeyPress = (event) => {
        if (event.key === 'Enter') {
            goToStep3();
        }
    }
    const handleRegionSelectChange = (e) => {
        setSelectedRegion(e.target.value);
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
                            className="col-lg-6 col-md-6 contact-form "
                            data-wow-delay=".3s"
                        >
                            <form id="estimate-form">
                                <div className="section-head">
                                    <h6 style={{ color: 'black' }}>Nos tarifs</h6>
                                    <h4 style={{ color: 'black' }} className="playfont"><span>Je veux ...</span></h4>
                                    <h6 style={{ color: 'black' }}><span>{message}</span></h6>
                                </div>
                                <div className="messages"></div>
                                <div className="controls">
                                    {step === 0 && estimations.map((feat, index) => renderOptions(feat, index, 0))}
                                    {step === 1 && estimations[selectedOption[0]].children.map((feat, index) =>
                                        renderOptions(feat, index, 1))}
                                     {step===2 && estimations[selectedOption[0]].children[selectedOption[1]].title === 'Autre' && <input
                                        id="other"
                                        onKeyPress={handleStep2KeyPress}
                                        name={"other"}
                                        onChange={(event) => setOther(event.target.value)}
                                        placeholder={"Veuillez Préciser"}
                                        required="required"
                                    />}
                                    {step === 2 && <input
                                        id="surface"
                                        min={0}
                                        onKeyPress={handleStep2KeyPress}
                                        type="number"
                                        onChange={(event) => setSurface(event.target.value)}
                                        name={"surface"}
                                        placeholder={"Surface (m2)"}
                                        required="required"
                                    />}
                                    {step === 3 &&
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
                                            <p>Sélectionnez votre région</p>
                                            <select name="regions" value={selectedRegion} onChange={handleRegionSelectChange}>
                                                {regions.sort().map(region => (<option value={region}>{region}</option>))}
                                            </select>
                                        </div>
                                    }
                                    <div className="row justify-content-center">
                                        {step > 0 && <button type="button" onClick={() => { setSelectedOption({ ...selectedOption, [step - 1]: null }); setStep(step - 1); setEstimation(0) }} className="btn-curve m-2">Retour</button>
                                        }
                                        {step === 2 && <button type="button" onClick={() => { goToStep3() }} className="btn-curve btn-color m-2">
                                            Suivant                                        </button>}
                                        {step === 3 && <button onClick={onSubmitQuote} type="submit" className="btn-curve btn-color m-2">
                                            Obtenir un devis
                                        </button>}</div>
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